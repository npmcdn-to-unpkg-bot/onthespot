var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var socketServer = require('./utils/socketServer');
var binaryServer = require('./utils/binary');
var authRoutes = require('./routes/auth');

var app = express();

app.set('port', process.env.port || 4000);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));
// Allow for node_module access as well as basic scripts
var scriptRoot = path.join(__dirname, '../public/scripts');
var nodeRoot = path.join(__dirname, '../node_modules');
var stylesRoot = path.join(__dirname, '../public/build/styles');

app.use('/scripts', express.static(scriptRoot));
app.use('/node_modules', express.static(nodeRoot));
app.use('/styles', express.static(stylesRoot));

// Set up our socket and binary server
var server = http.createServer(app);
socketServer(server, app);
binaryServer(app, server);

app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('Cannot find:', req.url);
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(4000, function () {
  console.log('App listening at http://localhost:%s', app.get('port'));
});

module.exports = app;
