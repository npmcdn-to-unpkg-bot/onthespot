var BinaryServer = require('binaryjs').BinaryServer;
var config = require('../config.js').config;

module.exports = function (app, server) {
  var bServer = new BinaryServer({
    server: server,
    path: config.binaryURI
  });

  bServer.on('connection', function (client) {
    console.log('Binary Server connect()');

    client.on('stream', function (stream, meta) {
      console.log(' > client onStream()');
      console.log(' > Client count: %d', Object.keys(bServer.clients).length);

      // TODO: Work on this to dispatch only to certain channels?
      console.log(meta.channel);

      var clients = bServer.clients;

      for (var id in clients) {
        if (clients.hasOwnProperty(id)) {
          var otherClient = clients[id];

          if (otherClient != client) {
            var send = otherClient.createStream(meta);
            stream.pipe(send);
          }
        }
      }

      stream.on('end', function(){
        console.log(' >> Stream onEnd()')
      })
    })
  })
};