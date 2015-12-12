;
(function () {
  'use strict';

  class AdminUsersController {
    constructor(){
    }

    createUser(){
      console.log('creating user', this.newUser)
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