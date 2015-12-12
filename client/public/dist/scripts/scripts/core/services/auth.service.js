'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function () {
  'use strict';

  var AuthService = (function () {
    /* @ngInject */

    function AuthService($http) {
      _classCallCheck(this, AuthService);

      this.$http = $http;
    }
    AuthService.$inject = ["$http"];

    _createClass(AuthService, [{
      key: 'login',
      value: function login(creds) {
        return this.$http.post('/auth/', creds).then(function (res) {
          console.log(res);
          return res.data;
        });
      }
    }]);

    return AuthService;
  })();

  angular.module('ots.core').service('authService', AuthService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDO0FBQ0QsQ0FBQyxZQUFZO0FBQ1gsY0FBWSxDQUFDOztNQUVQLFdBQVc7OztBQUVmLGFBRkksV0FBVyxDQUVILEtBQUssRUFBRTs0QkFGZixXQUFXOztBQUdiLFVBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOztpQkFKRyxXQUFXOzs0QkFNVCxLQUFLLEVBQUU7QUFDWCxlQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ25CLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLGlCQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDakIsQ0FBQyxDQUFBO09BQ0w7OztXQVpHLFdBQVc7OztBQWVqQixTQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUN2QixPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0NBQ3hDLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvY29yZS9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7XG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRodHRwKSB7XG4gICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgfVxuXG4gICAgbG9naW4oY3JlZHMpIHtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoJy9hdXRoLycsIGNyZWRzKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYW5ndWxhci5tb2R1bGUoJ290cy5jb3JlJylcbiAgICAuc2VydmljZSgnYXV0aFNlcnZpY2UnLCBBdXRoU2VydmljZSk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
