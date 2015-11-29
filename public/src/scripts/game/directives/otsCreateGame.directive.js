;
(function () {
  'use strict';

  class CreateGameController {
    /* @ngInject */
    constructor($timeout, chatService) {
      /*
      // Recording/playing back audio
      var recorder = chatService.getRecorder();
      var playback = chatService.getPlayback();

      recorder.initialize().then(instance => {
        instance.start();
      });
      $timeout(function () {
        recorder.stop();
        playback.playCache();
      }, 5000)
      */
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