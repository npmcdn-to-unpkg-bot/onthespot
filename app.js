var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var redis = require("redis");
var sockjs = require("sockjs");
var TokenSocketServer = require("node-token-sockjs");

var routes = require('./routes/index');
var app = express(),
  socketServer = sockjs.createServer(),
  redisClient = redis.createClient(),
  pubsubClient = redis.createClient();

var server = http.createServer(app);

var targetRoot = 'public/dist/';
// view engine setup
app.set('port', process.env.port || 3000);
app.set('views', path.join(__dirname, 'public/dist/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, targetRoot)));
app.use('scripts', express.static(path.join(targetRoot, '/scripts')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var socketOptions = {
  prefix: "/sockets",
  sockjs_url: "//cdn.sockjs.org/sockjs-0.3.min.js"
};
socketServer.installHandlers(server, socketOptions);
var tokenServer = new TokenSocketServer(app, redisClient, socketServer, {
  prefix: socketOptions.prefix,
  tokenRoute: "/socket/token",
  pubsubClient: pubsubClient,
  //socketController: controller,
  //customMiddleware: customMiddleware,
  //authentication: authenticationFn,
  debug: app.get("env") !== "production",
  routes: {
    user: {
      //read: readUsers // now this can be called via the RPC interface
    }
  },
  ping: true
});

server.listen(3000, function () {
  console.log('Express server listening on port ' + 3000);
});

/**
 * Simple checker for env target
 * @param env
 * @returns {boolean}
 */
function envIs(env) {
  return app.get('env') == env;
}

module.exports = app;
