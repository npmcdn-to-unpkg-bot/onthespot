;(function(){
  'use strict';

  class MenuComponentController {
    /* @ngInject */
    constructor(rpcService){
      this.rpcService = rpcService;

      rpcService.test(function(res){
        console.log('Test:', res);
      })
    }
  }
  var MenuComponent = {
    templateUrl: 'templates/menu/menuComponent.html',
    controller: MenuComponentController
  };

  angular.module('ots').component('otsMenu', MenuComponent);
})();