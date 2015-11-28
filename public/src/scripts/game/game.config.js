;
(function () {
  'use strict';

  angular.module('ots')
    .constant('GAME_DATA_URI', '/api/game/')
    .constant('CATEGORIES_URI', '/api/game/categories')
    .config(gameRoutes);

  /* @ngInject */
  function gameRoutes($stateProvider){
    $stateProvider
    .state('gameboard', {
        url: '/game',
        templateUrl: '<ots-gameboard></ots-gameboard>'
      })
  }
})();