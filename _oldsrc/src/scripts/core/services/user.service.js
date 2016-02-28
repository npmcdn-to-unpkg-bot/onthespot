;
(function (Rx) {
  'use strict';

  class UserService {
    /* @ngInject */
    constructor($http) {
      this.$http = $http;
      this._users = new Rx.Observable.fromPromise(this.$http.get('/api/admin/users'))
    }

    getUsers() {
      return this._users.onNext().map(res => res.data);
    }

    addUser(userData) {
      return new Rx.Observable.fromPromise(this.$http.post('/api/admin/users/', {
        user: userData
      }))
    }
  }

  angular.module('userService', UserService);
})(window.Rx);