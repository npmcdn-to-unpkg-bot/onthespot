'use strict';

;
(function () {
  'use strict';

  angular.module('ots.admin', ['ots.core']).config(adminRoutes);

  /* @ngInject */
  function adminRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/admin', '/admin/control-panel');

    $stateProvider.state('admin', {
      url: '/admin',
      abstract: true,
      templateUrl: 'templates/admin/admin.html',
      data: {
        auth: true,
        admin: true
      }
    }).state('admin.home', {
      url: '/control-panel',
      views: {
        '': {
          template: '<ots-admin-cp></ots-admin-cp>'
        }
      }
    }).state('admin.users', {
      url: '/users',
      views: {
        '': {
          template: '<ots-admin-users></ots-admin-users>'
        }
      }
    }).state('admin.categories', {
      url: '/categories',
      views: {
        '': {
          template: '<ots-admin-categories></ots-admin-categories>'
        }
      }
    });
  }
  adminRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUM7QUFDRCxDQUFDLFlBQVk7QUFDWCxjQUFZLENBQUM7O0FBRWIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUN0QyxNQUFNLENBQUMsV0FBVyxDQUFDOzs7QUFBQyxBQUd2QixXQUFTLFdBQVcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7QUFDdkQsc0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDOztBQUUxRCxrQkFBYyxDQUNYLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDZCxTQUFHLEVBQUUsUUFBUTtBQUNiLGNBQVEsRUFBRSxJQUFJO0FBQ2QsaUJBQVcsRUFBRSw0QkFBNEI7QUFDekMsVUFBSSxFQUFFO0FBQ0osWUFBSSxFQUFFLElBQUk7QUFDVixhQUFLLEVBQUUsSUFBSTtPQUNaO0tBQ0YsQ0FBQyxDQUNELEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDbkIsU0FBRyxFQUFFLGdCQUFnQjtBQUNyQixXQUFLLEVBQUU7QUFDTCxVQUFFLEVBQUU7QUFDRixrQkFBUSxFQUFFLCtCQUErQjtTQUMxQztPQUNGO0tBQ0YsQ0FBQyxDQUNELEtBQUssQ0FBQyxhQUFhLEVBQUU7QUFDcEIsU0FBRyxFQUFFLFFBQVE7QUFDYixXQUFLLEVBQUU7QUFDTCxVQUFFLEVBQUU7QUFDRixrQkFBUSxFQUFFLHFDQUFxQztTQUNoRDtPQUNGO0tBQ0YsQ0FBQyxDQUNELEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtBQUN6QixTQUFHLEVBQUUsYUFBYTtBQUNsQixXQUFLLEVBQUU7QUFDTCxVQUFFLEVBQUU7QUFDRixrQkFBUSxFQUFFLCtDQUErQztTQUMxRDtPQUNGO0tBQ0YsQ0FBQyxDQUFBO0dBQ0w7Q0FFRixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzY3JpcHRzL2FkbWluL2FkbWluLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjtcbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyLm1vZHVsZSgnb3RzLmFkbWluJywgWydvdHMuY29yZSddKVxuICAgIC5jb25maWcoYWRtaW5Sb3V0ZXMpO1xuXG4gIC8qIEBuZ0luamVjdCAqL1xuICBmdW5jdGlvbiBhZG1pblJvdXRlcygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLndoZW4oJy9hZG1pbicsICcvYWRtaW4vY29udHJvbC1wYW5lbCcpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnYWRtaW4nLCB7XG4gICAgICAgIHVybDogJy9hZG1pbicsXG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hZG1pbi9hZG1pbi5odG1sJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgYWRtaW46IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnYWRtaW4uaG9tZScsIHtcbiAgICAgICAgdXJsOiAnL2NvbnRyb2wtcGFuZWwnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgICcnOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxvdHMtYWRtaW4tY3A+PC9vdHMtYWRtaW4tY3A+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnYWRtaW4udXNlcnMnLCB7XG4gICAgICAgIHVybDogJy91c2VycycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgJyc6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPG90cy1hZG1pbi11c2Vycz48L290cy1hZG1pbi11c2Vycz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdhZG1pbi5jYXRlZ29yaWVzJywge1xuICAgICAgICB1cmw6ICcvY2F0ZWdvcmllcycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgJyc6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPG90cy1hZG1pbi1jYXRlZ29yaWVzPjwvb3RzLWFkbWluLWNhdGVnb3JpZXM+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
