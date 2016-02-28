;
(function () {
  'use strict';

  /**
   * @controller
   * @as: board
   */
  class GameboardController {
    /* @ngInject */
    constructor() {

    }
  }

  // @Component
  var otsGameboard = {
    templateUrl: 'templates/game/otsGameboard.html',
    controller: 'GameboardController'
  };

  angular.module('ots.game')
    .controller('GameboardController', GameboardController)
    .component('otsGameboard', otsGameboard);
})();