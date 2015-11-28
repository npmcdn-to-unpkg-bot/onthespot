;
(function () {
  'use strict';

  class CreateGameController {
    /* @ngInject */
    constructor(){

    }
  }

  var otsCreateGameComponent = {
    controller: 'CreateGameController',
    templateUrl: 'templates/game/otsCreateGame.html'
  };

  angular.module('ots.game')
    .component('otsCreateGame', otsCreateGameComponent)
    .controller('CreateGameController', CreateGameController)
})();