'use strict';

;
(function () {
  'use strict';

  angular.module('ots.game').constant('GAME_DATA_URI', '/api/game/').constant('CATEGORIES_URI', '/api/game/categories').config(gameRoutes);

  /* @ngInject */
  function gameRoutes($stateProvider) {
    $stateProvider.state('game', {
      url: '/game',
      template: '<ui-view></ui-view>',
      abstract: true
    }).state('game.create', {
      url: '/create',
      template: '<ots-create-game></ots-create-game>'
    }).state('game.board', {
      url: '/game',
      templateUrl: '<ots-gameboard></ots-gameboard>'
    });
  }
  gameRoutes.$inject = ["$stateProvider"];
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cy5nYW1lLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUM7QUFDRCxDQUFDLFlBQVk7QUFDWCxjQUFZLENBQUM7O0FBRWIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDdkIsUUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FDdkMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLENBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUM7OztBQUFDLEFBR3RCLFdBQVMsVUFBVSxDQUFDLGNBQWMsRUFBRTtBQUNsQyxrQkFBYyxDQUNYLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDYixTQUFHLEVBQUUsT0FBTztBQUNaLGNBQVEsRUFBRSxxQkFBcUI7QUFDL0IsY0FBUSxFQUFFLElBQUk7S0FDZixDQUFDLENBQ0QsS0FBSyxDQUFDLGFBQWEsRUFBRTtBQUNwQixTQUFHLEVBQUUsU0FBUztBQUNkLGNBQVEsRUFBRSxxQ0FBcUM7S0FDaEQsQ0FBQyxDQUNELEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDbkIsU0FBRyxFQUFFLE9BQU87QUFDWixpQkFBVyxFQUFFLGlDQUFpQztLQUMvQyxDQUFDLENBQUE7R0FDTDtDQUNGLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvZ2FtZS9vdHMuZ2FtZS5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7XG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ290cy5nYW1lJylcbiAgICAuY29uc3RhbnQoJ0dBTUVfREFUQV9VUkknLCAnL2FwaS9nYW1lLycpXG4gICAgLmNvbnN0YW50KCdDQVRFR09SSUVTX1VSSScsICcvYXBpL2dhbWUvY2F0ZWdvcmllcycpXG4gICAgLmNvbmZpZyhnYW1lUm91dGVzKTtcblxuICAvKiBAbmdJbmplY3QgKi9cbiAgZnVuY3Rpb24gZ2FtZVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2dhbWUnLCB7XG4gICAgICAgIHVybDogJy9nYW1lJyxcbiAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldz48L3VpLXZpZXc+JyxcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2dhbWUuY3JlYXRlJywge1xuICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgdGVtcGxhdGU6ICc8b3RzLWNyZWF0ZS1nYW1lPjwvb3RzLWNyZWF0ZS1nYW1lPidcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2dhbWUuYm9hcmQnLCB7XG4gICAgICAgIHVybDogJy9nYW1lJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICc8b3RzLWdhbWVib2FyZD48L290cy1nYW1lYm9hcmQ+J1xuICAgICAgfSlcbiAgfVxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
