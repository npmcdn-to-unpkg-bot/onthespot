;
(function () {
  'use strict';

  class UserController {
    constructor(){
      console.log('New User:', this.user)
    }
  }

  var otsUser = {
    controller: 'UserController',
    bindings: {
      user: '=userData'
    }
  };

  angular.module('ots.admin')
    .controller('UserController', UserController)
    .component('otsUser', otsUser);
})();