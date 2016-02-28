;
(function (Rx) {
  'use strict';

  /**
   *
   */
  class UserListController {
    /* @ngInject */
    constructor(userService) {
      this.userService = userService;
      this.getUsers();
    }

    getUsers() {
      return this.userService.getUsers();
    }
  }

  var otsUserList = {
    controller: 'UserListController'
  };

  angular.module('ots.admin')
    .controller('UserListController', UserListController)
    .component('otsUserList', otsUserList);
})(window.Rx);