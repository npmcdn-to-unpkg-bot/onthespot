;(function(){
  'use strict';

  class otsTvController {
    /* @ngInject */
    constructor(){
      var tv = this;
    }
  }

  var otsTvComponent = {
    controller: otsTvController,
    templateUrl: 'templates/game/otsTv.html',
    bindings: {
      question: '='
    }
  };

  angular.module('ots.game')
    .controller('otsTvController', otsTvController)
    .component('otsTv', otsTvComponent);
})();