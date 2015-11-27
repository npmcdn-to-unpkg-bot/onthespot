;
(function () {
  'use strict';

  class GameService {
    constructor() {
      console.log('Game service');
    }
  }

  angular.module('ots')
    .service('gameService', GameService);
})();