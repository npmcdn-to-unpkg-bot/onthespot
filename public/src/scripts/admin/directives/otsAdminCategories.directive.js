;
(function () {
  'use strict';

  class AdminCategoryController {
    constructor(){

    }
  }
  var adminCategories = {
    controller: 'AdminCategoryController',
    templateUrl: 'templates/admin/otsAdminCategories.html'
  };

  angular.module('ots.admin')
    .controller('AdminCategoryController', AdminCategoryController)
    .component('otsAdminCategories', adminCategories);
})();