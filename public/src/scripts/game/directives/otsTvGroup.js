;
(function () {
  'use strict';

  class otsTvGroupController {
    /* @ngInject */
    constructor(){
      console.log('TV Group:', this.tvGroup);
    }
  }

  var otsTVGroup = {
    controller: 'otsTvGroupController',
    templateUrl: 'templates/game/otsTvGroup.html',
    bindings: {
      tvGroup: '='
    }
  };

  angular.module('ots.game')
    .controller('otsTvGroupController', otsTvGroupController)
    .component('otsTvGroup', otsTVGroup)
})();