;
(function () {
  'use strict';

  angular.module('ots.game')
    .constant('GAME_DATA_URI', '/api/game/')
    .constant('CATEGORIES_URI', '/api/game/categories')
    .config(gameRoutes);

  /* @ngInject */
  function gameRoutes($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        template: '<ui-view></ui-view>',
        abstract: true
      })
      .state('game.create', {
        url: '/create',
        template: '<ots-create-game></ots-create-game>'
      })
      .state('game.board', {
        url: '/game',
        templateUrl: '<ots-gameboard></ots-gameboard>'
      })
  }
})();