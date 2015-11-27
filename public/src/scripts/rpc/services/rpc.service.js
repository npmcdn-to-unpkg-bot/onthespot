;
(function () {
  'use strict';

  var options = {
    host: "https://localhost:3000",
    tokenPath: "/socket/token",
    socketPrefix: "/sockets",
    reconnect: true,
    //authentication: {
    //  foo: "bar"
    //},
    sockjs: {
      transports: ["xhr-polling"]
    }
  };

  class RPCService {
    constructor() {
      this.service = new Rx.Subject();

      var socket = new TokenSocket(options);

      // Ready
      socket.ready(error => {
        if (error) console.warn('Error in socket.ready:', error);

        console.log('Socket created.', socket);
      });

      // On Message callback
      socket.onmessage((channel, message) => {
        console.log('onmessage', channel, message);
        service.onNext(message);
      })
    }
  }

  angular.module('ots.rpc').service('rpcService', RPCService);
})();