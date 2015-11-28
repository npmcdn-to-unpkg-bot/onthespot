;
(function () {
  'use strict';

  var options = {
    host: 'http://localhost:3000',
    socketPrefix: '/sockets',
    tokenPath: '/socket/token',
    host: "//localhost:3000",
    reconnect: true,
    authentication: {
      foo: "bar"
    },
    ping: true,
    // maybe modify sockjs options...
    sockjs: {
      transports: ["xhr-polling"]
    }
  };

  var actions = {
    ping: function(data, callback){
      callback(null, data);
    }
  };

  class RPCService {

    /* @ngInject */
    constructor($log) {
      this.service = new Rx.Subject();

      this._socket = new TokenSocket(options, actions);

      this._socket.ready(function(){
        $log.debug('Socket ready.')
      });

      this._socket.onreconnect(function(){
        console.log('error', arguments)
      })
    }

    /**
     *
     */
    getCategories(cb){
      this._socket.rpc('getCategories', { category: 'all' }, function(e, res){
        if(e) $log.error(e);
        cb(res);
      })
    }
  }

  angular.module('ots.rpc').service('rpcService', RPCService);
})();