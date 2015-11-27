;(function(){
  'use strict';

  class MenuComponentController {
    /* @ngInject */
    constructor(rpcService){
      this.rpcService = rpcService;
    }
  }
  var MenuComponent = {
    templateUrl: 'templates/menu/menuComponent.html',
    controller: MenuComponentController
  };

  angular.module('ots').component('otsMenu', MenuComponent);
})();