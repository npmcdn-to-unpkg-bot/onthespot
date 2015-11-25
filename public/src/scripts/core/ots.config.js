;(function(){
  'use strict';

  angular.module('ots.core', ['ui.router'])
    .config(otsConfig);

  function otsConfig(){
    console.log('ots.config');
  }
})();