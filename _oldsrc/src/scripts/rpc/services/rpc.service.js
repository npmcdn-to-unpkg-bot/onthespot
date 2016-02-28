class RPCService {

  /* @ngInject */
  constructor($log, localStorageService, JWT_KEY) {
    var options = {
      host: "//localhost:3000",
      tokenPath: '/socket/token',
      socketPrefix: '/sockets',
      reconnect: true,
      authentication: {
        jwt: localStorageService.get(JWT_KEY)
      },
      ping: true
    };

    var actions = {
      ping: function (data, callback) {
        callback(null, data);
      }
    };

    this.service = new Rx.Subject();

    this._socket = new TokenSocket(options, actions);

    this._socket.ready(function () {
      $log.debug('Socket ready.')
    });

    this._socket.onreconnect(function () {
      console.log('error', arguments)
    })
  }

  /**
   *
   */
  getCategories(cb) {
    this._socket.rpc('getCategories', {category: 'all'}, function (e, res) {
      if (e) $log.error(e);
      cb(res);
    })
  }
}