;(function(){
  'use strict';

  class MenuComponentController {
    /* @ngInject */
    constructor(rpcService){
      this.rpcService = rpcService;

      rpcService.getCategories(function(res){
        console.log('Categories', res);
      })
    }
  }
  var MenuComponent = {
    templateUrl: 'templates/menu/otsMenu.html',
    controller: MenuComponentController
  };

  angular.module('ots').component('otsMenu', MenuComponent);
})();