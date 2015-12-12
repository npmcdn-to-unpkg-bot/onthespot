'use strict';

;
(function () {
  'use strict';

  angular.module('ots', ['ots.core', 'ots.rpc', 'ots.game', 'ots.admin']).config(appRoutes).run(monitorRun);

  /* @ngInject */
  function appRoutes($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state('home', {
      url: '/',
      template: '<ots-menu></ots-menu>'
    });
  }
  appRoutes.$inject = ["$stateProvider", "$locationProvider"];
  /* @ngInject */
  function monitorRun($rootScope, $state, authService) {
    $rootScope.$state = $state;
    $rootScope.auth = authService;
  }
  monitorRun.$inject = ["$rootScope", "$state", "authService"];
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9udGhlc3BvdC5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDO0FBQ0QsQ0FBQyxZQUFZO0FBQ1gsY0FBWSxDQUFDOztBQUViLFNBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FDcEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDOzs7QUFBQyxBQUduQixXQUFTLFNBQVMsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7QUFDcEQscUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLGtCQUFjLENBQ1gsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNiLFNBQUcsRUFBRSxHQUFHO0FBQ1IsY0FBUSxFQUFFLHVCQUF1QjtLQUNsQyxDQUFDLENBQUE7R0FDTDs7QUFBQSxBQUVELFdBQVMsVUFBVSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0FBQ2xELGNBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNCLGNBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0dBQy9CO0NBQ0YsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoic2NyaXB0cy9vbnRoZXNwb3QubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiO1xuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdvdHMnLCBbJ290cy5jb3JlJywgJ290cy5ycGMnLCAnb3RzLmdhbWUnLCAnb3RzLmFkbWluJ10pXG4gICAgLmNvbmZpZyhhcHBSb3V0ZXMpXG4gICAgLnJ1bihtb25pdG9yUnVuKTtcblxuICAvKiBAbmdJbmplY3QgKi9cbiAgZnVuY3Rpb24gYXBwUm91dGVzKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGU6ICc8b3RzLW1lbnU+PC9vdHMtbWVudT4nXG4gICAgICB9KVxuICB9XG4gIC8qIEBuZ0luamVjdCAqL1xuICBmdW5jdGlvbiBtb25pdG9yUnVuKCRyb290U2NvcGUsICRzdGF0ZSwgYXV0aFNlcnZpY2Upe1xuICAgICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICAgICRyb290U2NvcGUuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICB9XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
