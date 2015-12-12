'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function () {
  'use strict';

  var AdminUsersController = (function () {
    function AdminUsersController() {
      _classCallCheck(this, AdminUsersController);
    }

    _createClass(AdminUsersController, [{
      key: 'createUser',
      value: function createUser() {
        console.log('creating user', this.newUser);
      }
    }]);

    return AdminUsersController;
  })();

  var adminUsers = {
    controller: 'AdminUsersController',
    templateUrl: 'templates/admin/otsAdminUsers.html'
  };

  angular.module('ots.admin').controller('AdminUsersController', AdminUsersController).component('otsAdminUsers', adminUsers);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90c0FkbWluVXNlcnMuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUM7QUFDRCxDQUFDLFlBQVk7QUFDWCxjQUFZLENBQUM7O01BRVAsb0JBQW9CO0FBQ3hCLGFBREksb0JBQW9CLEdBQ1g7NEJBRFQsb0JBQW9CO0tBRXZCOztpQkFGRyxvQkFBb0I7O21DQUlaO0FBQ1YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO09BQzNDOzs7V0FORyxvQkFBb0I7OztBQVExQixNQUFJLFVBQVUsR0FBRztBQUNmLGNBQVUsRUFBRSxzQkFBc0I7QUFDbEMsZUFBVyxFQUFFLG9DQUFvQztHQUNsRCxDQUFDOztBQUVGLFNBQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQ3hCLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUN4RCxTQUFTLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQzNDLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvYWRtaW4vZGlyZWN0aXZlcy9vdHNBZG1pblVzZXJzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjtcbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjbGFzcyBBZG1pblVzZXJzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG5cbiAgICBjcmVhdGVVc2VyKCl7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgdXNlcicsIHRoaXMubmV3VXNlcilcbiAgICB9XG4gIH1cbiAgdmFyIGFkbWluVXNlcnMgPSB7XG4gICAgY29udHJvbGxlcjogJ0FkbWluVXNlcnNDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hZG1pbi9vdHNBZG1pblVzZXJzLmh0bWwnXG4gIH07XG5cbiAgYW5ndWxhci5tb2R1bGUoJ290cy5hZG1pbicpXG4gICAgLmNvbnRyb2xsZXIoJ0FkbWluVXNlcnNDb250cm9sbGVyJywgQWRtaW5Vc2Vyc0NvbnRyb2xsZXIpXG4gICAgLmNvbXBvbmVudCgnb3RzQWRtaW5Vc2VycycsIGFkbWluVXNlcnMpO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
