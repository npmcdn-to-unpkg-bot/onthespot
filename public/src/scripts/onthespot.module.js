;
(function () {
  'use strict';

  angular.module('ots', ['ots.core', 'ots.rpc', 'ots.game', 'ots.admin'])
    .config(appRoutes)
    .run(monitorRun);

  /* @ngInject */
  function appRoutes($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        template: '<ots-menu></ots-menu>'
      })
  }
  /* @ngInject */
  function monitorRun($rootScope, $state, authService){
    $rootScope.$state = $state;
    $rootScope.auth = authService;
  }
})();