'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function () {
  'use strict'

  /**
   * @controller
   * @as: board
   */
  ;

  var GameboardController =
  /* @ngInject */
  function GameboardController() {
    _classCallCheck(this, GameboardController);
  };

  // @Component

  var otsGameboard = {
    templateUrl: 'templates/game/otsGameboard.html',
    controller: 'GameboardController'
  };

  angular.module('ots.game').controller('GameboardController', GameboardController).component('otsGameboard', otsGameboard);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90c0dhbWVib2FyZC5kaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUM7QUFDRCxDQUFDLFlBQVk7QUFDWDs7Ozs7O0FBQVksR0FBQzs7TUFNUCxtQkFBbUI7O0FBRXZCLFdBRkksbUJBQW1CLEdBRVQ7MEJBRlYsbUJBQW1CO0dBSXRCOzs7O0FBSUgsTUFBSSxZQUFZLEdBQUc7QUFDakIsZUFBVyxFQUFFLGtDQUFrQztBQUMvQyxjQUFVLEVBQUUscUJBQXFCO0dBQ2xDLENBQUM7O0FBRUYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDdkIsVUFBVSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQ3RELFNBQVMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7Q0FDNUMsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoic2NyaXB0cy9nYW1lL2RpcmVjdGl2ZXMvb3RzR2FtZWJvYXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjtcbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQGNvbnRyb2xsZXJcbiAgICogQGFzOiBib2FyZFxuICAgKi9cbiAgY2xhc3MgR2FtZWJvYXJkQ29udHJvbGxlciB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG4gIH1cblxuICAvLyBAQ29tcG9uZW50XG4gIHZhciBvdHNHYW1lYm9hcmQgPSB7XG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZ2FtZS9vdHNHYW1lYm9hcmQuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0dhbWVib2FyZENvbnRyb2xsZXInXG4gIH07XG5cbiAgYW5ndWxhci5tb2R1bGUoJ290cy5nYW1lJylcbiAgICAuY29udHJvbGxlcignR2FtZWJvYXJkQ29udHJvbGxlcicsIEdhbWVib2FyZENvbnRyb2xsZXIpXG4gICAgLmNvbXBvbmVudCgnb3RzR2FtZWJvYXJkJywgb3RzR2FtZWJvYXJkKTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
