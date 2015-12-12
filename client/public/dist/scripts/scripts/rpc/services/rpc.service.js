'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function () {
  'use strict';

  var RPCService = (function () {

    /* @ngInject */

    function RPCService($log, localStorageService, JWT_KEY) {
      _classCallCheck(this, RPCService);

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
        ping: function ping(data, callback) {
          callback(null, data);
        }
      };

      this.service = new Rx.Subject();

      this._socket = new TokenSocket(options, actions);

      this._socket.ready(function () {
        $log.debug('Socket ready.');
      });

      this._socket.onreconnect(function () {
        console.log('error', arguments);
      });
    }
    RPCService.$inject = ["$log", "localStorageService", "JWT_KEY"];

    /**
     *
     */

    _createClass(RPCService, [{
      key: 'getCategories',
      value: function getCategories(cb) {
        this._socket.rpc('getCategories', { category: 'all' }, function (e, res) {
          if (e) $log.error(e);
          cb(res);
        });
      }
    }]);

    return RPCService;
  })();

  angular.module('ots.rpc').service('rpcService', RPCService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJwYy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUM7QUFDRCxDQUFDLFlBQVk7QUFDWCxjQUFZLENBQUM7O01BRVAsVUFBVTs7OztBQUdkLGFBSEksVUFBVSxDQUdGLElBQUksRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUU7NEJBSDVDLFVBQVU7O0FBSVosVUFBSSxPQUFPLEdBQUc7QUFDWixZQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLGlCQUFTLEVBQUUsZUFBZTtBQUMxQixvQkFBWSxFQUFFLFVBQVU7QUFDeEIsaUJBQVMsRUFBRSxJQUFJO0FBQ2Ysc0JBQWMsRUFBRTtBQUNkLGFBQUcsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3RDO0FBQ0QsWUFBSSxFQUFFLElBQUk7T0FDWCxDQUFDOztBQUVGLFVBQUksT0FBTyxHQUFHO0FBQ1osWUFBSSxFQUFFLGNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUM5QixrQkFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0QjtPQUNGLENBQUM7O0FBRUYsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFFaEMsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRWpELFVBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVk7QUFDN0IsWUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtPQUM1QixDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWTtBQUNuQyxlQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtPQUNoQyxDQUFDLENBQUE7S0FDSDs7Ozs7QUFBQTtpQkFoQ0csVUFBVTs7b0NBcUNBLEVBQUUsRUFBRTtBQUNoQixZQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFO0FBQ3JFLGNBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsWUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1QsQ0FBQyxDQUFBO09BQ0g7OztXQTFDRyxVQUFVOzs7QUE2Q2hCLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3RCxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzY3JpcHRzL3JwYy9zZXJ2aWNlcy9ycGMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjtcbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjbGFzcyBSUENTZXJ2aWNlIHtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRsb2csIGxvY2FsU3RvcmFnZVNlcnZpY2UsIEpXVF9LRVkpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBob3N0OiBcIi8vbG9jYWxob3N0OjMwMDBcIixcbiAgICAgICAgdG9rZW5QYXRoOiAnL3NvY2tldC90b2tlbicsXG4gICAgICAgIHNvY2tldFByZWZpeDogJy9zb2NrZXRzJyxcbiAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICBhdXRoZW50aWNhdGlvbjoge1xuICAgICAgICAgIGp3dDogbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoSldUX0tFWSlcbiAgICAgICAgfSxcbiAgICAgICAgcGluZzogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgdmFyIGFjdGlvbnMgPSB7XG4gICAgICAgIHBpbmc6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgUnguU3ViamVjdCgpO1xuXG4gICAgICB0aGlzLl9zb2NrZXQgPSBuZXcgVG9rZW5Tb2NrZXQob3B0aW9ucywgYWN0aW9ucyk7XG5cbiAgICAgIHRoaXMuX3NvY2tldC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1NvY2tldCByZWFkeS4nKVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3NvY2tldC5vbnJlY29ubmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRDYXRlZ29yaWVzKGNiKSB7XG4gICAgICB0aGlzLl9zb2NrZXQucnBjKCdnZXRDYXRlZ29yaWVzJywge2NhdGVnb3J5OiAnYWxsJ30sIGZ1bmN0aW9uIChlLCByZXMpIHtcbiAgICAgICAgaWYgKGUpICRsb2cuZXJyb3IoZSk7XG4gICAgICAgIGNiKHJlcyk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdvdHMucnBjJykuc2VydmljZSgncnBjU2VydmljZScsIFJQQ1NlcnZpY2UpO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
