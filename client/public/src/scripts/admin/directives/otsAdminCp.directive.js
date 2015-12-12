;
(function () {
  'use strict';

  class AdminControlPanel {
    constructor() {

    }
  }

  var otsAdminCp = {
    controller: 'AdminControlPanel',
    templateUrl: 'templates/admin/otsAdminCp.html'
  };

  angular.module('ots.admin')
    .controller('AdminControlPanel', AdminControlPanel)
    .component('otsAdminCp', otsAdminCp);
})();