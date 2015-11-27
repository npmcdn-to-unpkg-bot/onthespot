;
(function () {
  'use strict';

  class RPCService {
    constructor() {
      this.options = {
        host: "https://localhost:3000",
        tokenPath: "/socket/token",
        socketPrefix: "/sockets",
        reconnect: true,
        //authentication: {
        //  foo: "bar"
        //},
        // maybe modify sockjs options...
        sockjs: {
          transports: ["xhr-polling"]
        }
      };
      console.log('RPCService');
    }
  }

  angular.module('ots.rpc').service('rpcService', RPCService);
})();