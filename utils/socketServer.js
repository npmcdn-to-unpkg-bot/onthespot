var tokenServer = require('node-token-sockjs');
var sockjs = require('sockjs');
var redis = require('redis');
var debug = require('debug');
var url = require('url');
//var jwtUtils = require('./jwt-utils');
//var jwt = require('jsonwebtoken');

module.exports = function (server, app) {
  var redisClient = redis.createClient(),
    pubSub = redis.createClient(),
    socketServer = sockjs.createServer();


  // Configuration
  socketServer.installHandlers(server, {
    prefix: "/sockets",
    sockjs_url: '//cdn.sockjs.org/sockjs-0.3.min.js'
  });

  // Our authentication function
  // NTS has jwt param attached from client in callback
  var authFunction = function (req, cb) {
    var params = url.parse(req.url, true);
    //var token = params.query.jwt;

    cb(null, {});
    /*
     jwt.verify(token, jwtUtils.secret, function (err, decoded) {
     if (err) {
     //console.log('Error verifying token NTS auth():', err.stack)
     return cb(err); // socket not allowed to connect
     }
     if (!decoded) {
     console.log('Error with decoded token in NTS auth():', err.stack)
     return cb(err);
     }
     // Create and assign req.user to the socket
     // From repo's readme:
     // 'socket will be issued a token and req.session will be attached to the socket'
     req.user = decoded;
     cb(null, req.user);
     });
     */
  };
  var controller = {
    echo: function(auth, data, cb){
      cb(null, data);
    },
    test: function(auth, data, cb){
      cb(null, data.test.toUpperCase());
    }
  };

  var ts = new tokenServer(app, redisClient, socketServer, {
    tokenPath: "/socket/token",
    socketPrefix: "/sockets",
    pubsubClient: pubSub,
    socketController: controller,
    authentication: authFunction,
    debug: true,
    ping: true,
    routes: {
      getCategories: function (req, res) {
        res.json([1,2,3,4])
      }
    }
  });

  // Events
  ts.on('authentication', function (socket, auth, callback) {
    callback();
  });

  // enforce access control to publish - subscribe events
  ts.on('subscribe', function (socket, data, callback) {
    // Sub the socket to the given channel
    callback(null, true); // socket will be allowed to subscribe
  });

  ts.on('publish', function (socket, data, callback) {
    callback(null, true); // socket will be allowed to publish
  });
  /*// when multiple listeners are bound to an event only one of them need return an error or falsy value for the action to be disallowed
   // in this example the broadcast action will be disallowed
   ts.on('broadcast', function(socket, data, callback){
   console.log('Socket attempting to broadcast: ', socket.auth, data.data);
   callback(null, true); // or false
   });*/

  return ts;
}