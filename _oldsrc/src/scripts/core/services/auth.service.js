;
(function () {
  'use strict';

  class AuthService {
    /* @ngInject */
    constructor($http) {
      this.$http = $http;
    }

    login(creds) {
      return this.$http.post('/auth/', creds)
        .then(function (res) {
          console.log(res);
          return res.data;
        })
    }
  }

  angular.module('ots.core')
    .service('authService', AuthService);
})();