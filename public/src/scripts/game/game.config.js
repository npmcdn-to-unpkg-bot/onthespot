;
(function () {
  'use strict';

  angular.module('ots')
    .config(gameConfig)
    .constant('GAME_DATA_URI', '/api/game/')
    .constant('CATEGORIES_URI', '/api/game/categories');

  /* @ngInject */
  function gameConfig($stateProvider) {

  }
})();