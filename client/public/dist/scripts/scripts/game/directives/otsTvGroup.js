'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function () {
  'use strict';

  var otsTvGroupController =
  /* @ngInject */
  function otsTvGroupController() {
    _classCallCheck(this, otsTvGroupController);

    console.log('TV Group:', this.tvGroup);
  };

  var otsTVGroup = {
    controller: 'otsTvGroupController',
    templateUrl: 'templates/game/otsTvGroup.html',
    bindings: {
      tvGroup: '='
    }
  };

  angular.module('ots.game').controller('otsTvGroupController', otsTvGroupController).component('otsTvGroup', otsTVGroup);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90c1R2R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUM7QUFDRCxDQUFDLFlBQVk7QUFDWCxjQUFZLENBQUM7O01BRVAsb0JBQW9COztBQUV4QixXQUZJLG9CQUFvQixHQUVYOzBCQUZULG9CQUFvQjs7QUFHdEIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3hDOztBQUdILE1BQUksVUFBVSxHQUFHO0FBQ2YsY0FBVSxFQUFFLHNCQUFzQjtBQUNsQyxlQUFXLEVBQUUsZ0NBQWdDO0FBQzdDLFlBQVEsRUFBRTtBQUNSLGFBQU8sRUFBRSxHQUFHO0tBQ2I7R0FDRixDQUFDOztBQUVGLFNBQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQ3ZCLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUN4RCxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0NBQ3ZDLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvZ2FtZS9kaXJlY3RpdmVzL290c1R2R3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7XG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY2xhc3Mgb3RzVHZHcm91cENvbnRyb2xsZXIge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICBjb25zb2xlLmxvZygnVFYgR3JvdXA6JywgdGhpcy50dkdyb3VwKTtcbiAgICB9XG4gIH1cblxuICB2YXIgb3RzVFZHcm91cCA9IHtcbiAgICBjb250cm9sbGVyOiAnb3RzVHZHcm91cENvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2dhbWUvb3RzVHZHcm91cC5odG1sJyxcbiAgICBiaW5kaW5nczoge1xuICAgICAgdHZHcm91cDogJz0nXG4gICAgfVxuICB9O1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdvdHMuZ2FtZScpXG4gICAgLmNvbnRyb2xsZXIoJ290c1R2R3JvdXBDb250cm9sbGVyJywgb3RzVHZHcm91cENvbnRyb2xsZXIpXG4gICAgLmNvbXBvbmVudCgnb3RzVHZHcm91cCcsIG90c1RWR3JvdXApXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
