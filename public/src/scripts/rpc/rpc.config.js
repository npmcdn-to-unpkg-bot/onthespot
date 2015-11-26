;
(function () {
  'use strict';

  angular.module('ots.rpc')
    .config(rpcConfig)
    .constant('SomeVal', 100)

  /* @ngInject */
  function rpcConfig() {
    console.log('hello')
  }
})();