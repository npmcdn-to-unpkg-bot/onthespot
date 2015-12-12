var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var socketServer = require('./utils/socketServer');
var binaryServer = require('./utils/binary');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ots');

var apiRoutes = require('./routes/api');
var routes = require('./routes/index');
var app = express();

app.set('port', process.env.port || 3000);

app.set('views', path.join(__dirname, 'public/dist/views'));
app.set('view engine', 'ejs');

// Target for serving
var targetRoot = 'public/dist/';
app.use(express.static(path.join(__dirname, targetRoot)));
app.use('scripts', express.static(path.join(targetRoot, '/scripts')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', routes.index);
//app.use(routes.api);
app.get('/partials/:name', routes.partials);

//app.use('/api', apiRoutes);

// Redirect everything else back to / for Angular routing.
app.use(function(req, res) {
  res.render(path.join(__dirname, 'public/dist/views/index.ejs'));
});

var server = http.createServer(app);
var tokenServer = socketServer(server, app);
var binServer = binaryServer(app, server);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
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


// Start listening
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
