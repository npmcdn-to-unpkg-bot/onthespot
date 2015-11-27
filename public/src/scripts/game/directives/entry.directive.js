;(function(){
  'use strict';

  class MenuComponentController {
    constructor(){
      console.log('MenuComponentController')
    }
  }
  var MenuComponent = {
    templateUrl: 'templates/game/menuComponent.html',
    controller: MenuComponentController
  };

  angular.module('ots').component('test', MenuComponent);
})();