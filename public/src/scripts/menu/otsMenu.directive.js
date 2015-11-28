;(function(){
  'use strict';

  class MenuComponentController {

    /* @ngInject */
    constructor($state, rpcService){
      this.rpcService = rpcService;
      this.$state = $state;

      rpcService.getCategories(function(res){
        console.log('Categories', res);
      })
    }
    create(){
      this.$state.go('game.create')
    }
  }
  var MenuComponent = {
    templateUrl: 'templates/menu/otsMenu.html',
    controller: MenuComponentController
  };

  angular.module('ots').component('otsMenu', MenuComponent);
})();