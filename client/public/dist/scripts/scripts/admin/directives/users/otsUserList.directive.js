'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function (Rx) {
  'use strict'

  /**
   *
   */
  ;

  var UserListController = (function () {
    /* @ngInject */

    function UserListController(userService) {
      _classCallCheck(this, UserListController);

      this.userService = userService;
      this.getUsers();
    }
    UserListController.$inject = ["userService"];

    _createClass(UserListController, [{
      key: 'getUsers',
      value: function getUsers() {
        return this.userService.getUsers();
      }
    }]);

    return UserListController;
  })();

  var otsUserList = {
    controller: 'UserListController'
  };

  angular.module('ots.admin').controller('UserListController', UserListController).component('otsUserList', otsUserList);
})(window.Rx);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90c1VzZXJMaXN0LmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDO0FBQ0QsQ0FBQyxVQUFVLEVBQUUsRUFBRTtBQUNiOzs7OztBQUFZLEdBQUM7O01BS1Asa0JBQWtCOzs7QUFFdEIsYUFGSSxrQkFBa0IsQ0FFVixXQUFXLEVBQUU7NEJBRnJCLGtCQUFrQjs7QUFHcEIsVUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsVUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOztpQkFMRyxrQkFBa0I7O2lDQU9YO0FBQ1QsZUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO09BQ3BDOzs7V0FURyxrQkFBa0I7OztBQVl4QixNQUFJLFdBQVcsR0FBRztBQUNoQixjQUFVLEVBQUUsb0JBQW9CO0dBQ2pDLENBQUM7O0FBRUYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDeEIsVUFBVSxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQ3BELFNBQVMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7Q0FDMUMsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJzY3JpcHRzL2FkbWluL2RpcmVjdGl2ZXMvdXNlcnMvb3RzVXNlckxpc3QuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiO1xuKGZ1bmN0aW9uIChSeCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjbGFzcyBVc2VyTGlzdENvbnRyb2xsZXIge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gICAgICB0aGlzLmdldFVzZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdHNVc2VyTGlzdCA9IHtcbiAgICBjb250cm9sbGVyOiAnVXNlckxpc3RDb250cm9sbGVyJ1xuICB9O1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdvdHMuYWRtaW4nKVxuICAgIC5jb250cm9sbGVyKCdVc2VyTGlzdENvbnRyb2xsZXInLCBVc2VyTGlzdENvbnRyb2xsZXIpXG4gICAgLmNvbXBvbmVudCgnb3RzVXNlckxpc3QnLCBvdHNVc2VyTGlzdCk7XG59KSh3aW5kb3cuUngpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
