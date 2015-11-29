;
(function () {
  'use strict';

  class AdminUsersController {
    constructor(){
    }
  }
  var adminUsers = {
    controller: 'AdminUsersController',
    templateUrl: 'templates/admin/otsAdminUsers.html'
  };

  angular.module('ots.admin')
    .controller('AdminUsersController', AdminUsersController)
    .component('otsAdminUsers', adminUsers);
})();