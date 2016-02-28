;
(function () {
  'use strict';

  angular.module('ots.admin', ['ots.core'])
    .config(adminRoutes);

  /* @ngInject */
  function adminRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/admin', '/admin/control-panel');

    $stateProvider
      .state('admin', {
        url: '/admin',
        abstract: true,
        templateUrl: 'templates/admin/admin.html',
        data: {
          auth: true,
          admin: true
        }
      })
      .state('admin.home', {
        url: '/control-panel',
        views: {
          '': {
            template: '<ots-admin-cp></ots-admin-cp>'
          }
        }
      })
      .state('admin.users', {
        url: '/users',
        views: {
          '': {
            template: '<ots-admin-users></ots-admin-users>'
          }
        }
      })
      .state('admin.categories', {
        url: '/categories',
        views: {
          '': {
            template: '<ots-admin-categories></ots-admin-categories>'
          }
        }
      })
  }

})();