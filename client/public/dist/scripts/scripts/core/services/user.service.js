'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function (Rx) {
  'use strict';

  var UserService = (function () {
    /* @ngInject */

    function UserService($http) {
      _classCallCheck(this, UserService);

      this.$http = $http;
      this._users = new Rx.Observable.fromPromise(this.$http.get('/api/admin/users'));
    }
    UserService.$inject = ["$http"];

    _createClass(UserService, [{
      key: 'getUsers',
      value: function getUsers() {
        return this._users.onNext().map(function (res) {
          return res.data;
        });
      }
    }, {
      key: 'addUser',
      value: function addUser(userData) {
        return new Rx.Observable.fromPromise(this.$http.post('/api/admin/users/', {
          user: userData
        }));
      }
    }]);

    return UserService;
  })();

  angular.module('userService', UserService);
})(window.Rx);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDO0FBQ0QsQ0FBQyxVQUFVLEVBQUUsRUFBRTtBQUNiLGNBQVksQ0FBQzs7TUFFUCxXQUFXOzs7QUFFZixhQUZJLFdBQVcsQ0FFSCxLQUFLLEVBQUU7NEJBRmYsV0FBVzs7QUFHYixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO0tBQ2hGOztpQkFMRyxXQUFXOztpQ0FPSjtBQUNULGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO2lCQUFJLEdBQUcsQ0FBQyxJQUFJO1NBQUEsQ0FBQyxDQUFDO09BQ2xEOzs7OEJBRU8sUUFBUSxFQUFFO0FBQ2hCLGVBQU8sSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUN4RSxjQUFJLEVBQUUsUUFBUTtTQUNmLENBQUMsQ0FBQyxDQUFBO09BQ0o7OztXQWZHLFdBQVc7OztBQWtCakIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7Q0FDNUMsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJzY3JpcHRzL2NvcmUvc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiO1xuKGZ1bmN0aW9uIChSeCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRodHRwKSB7XG4gICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICB0aGlzLl91c2VycyA9IG5ldyBSeC5PYnNlcnZhYmxlLmZyb21Qcm9taXNlKHRoaXMuJGh0dHAuZ2V0KCcvYXBpL2FkbWluL3VzZXJzJykpXG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdXNlcnMub25OZXh0KCkubWFwKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgfVxuXG4gICAgYWRkVXNlcih1c2VyRGF0YSkge1xuICAgICAgcmV0dXJuIG5ldyBSeC5PYnNlcnZhYmxlLmZyb21Qcm9taXNlKHRoaXMuJGh0dHAucG9zdCgnL2FwaS9hZG1pbi91c2Vycy8nLCB7XG4gICAgICAgIHVzZXI6IHVzZXJEYXRhXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgndXNlclNlcnZpY2UnLCBVc2VyU2VydmljZSk7XG59KSh3aW5kb3cuUngpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
