;
(function () {
  'use strict';

  // ots.template injection is built automatically by Gulp
  angular.module('ots.core',
    [
      'ots.templates',
      'ui.router',
      'ngMaterial',
      'angular-jwt',
      'LocalStorageModule'
    ])
    .constant('JWT_KEY', 'otsJwtKey');
})();