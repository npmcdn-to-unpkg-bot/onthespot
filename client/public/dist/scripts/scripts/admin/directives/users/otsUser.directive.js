'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function () {
  'use strict';

  var UserController = function UserController() {
    _classCallCheck(this, UserController);

    console.log('New User:', this.user);
  };

  var otsUser = {
    controller: 'UserController',
    bindings: {
      user: '=userData'
    }
  };

  angular.module('ots.admin').controller('UserController', UserController).component('otsUser', otsUser);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90c1VzZXIuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxDQUFDO0FBQ0QsQ0FBQyxZQUFZO0FBQ1gsY0FBWSxDQUFDOztNQUVQLGNBQWMsR0FDbEIsU0FESSxjQUFjLEdBQ0w7MEJBRFQsY0FBYzs7QUFFaEIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0dBQ3BDOztBQUdILE1BQUksT0FBTyxHQUFHO0FBQ1osY0FBVSxFQUFFLGdCQUFnQjtBQUM1QixZQUFRLEVBQUU7QUFDUixVQUFJLEVBQUUsV0FBVztLQUNsQjtHQUNGLENBQUM7O0FBRUYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDeEIsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUM1QyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ2xDLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvYWRtaW4vZGlyZWN0aXZlcy91c2Vycy9vdHNVc2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjtcbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdOZXcgVXNlcjonLCB0aGlzLnVzZXIpXG4gICAgfVxuICB9XG5cbiAgdmFyIG90c1VzZXIgPSB7XG4gICAgY29udHJvbGxlcjogJ1VzZXJDb250cm9sbGVyJyxcbiAgICBiaW5kaW5nczoge1xuICAgICAgdXNlcjogJz11c2VyRGF0YSdcbiAgICB9XG4gIH07XG5cbiAgYW5ndWxhci5tb2R1bGUoJ290cy5hZG1pbicpXG4gICAgLmNvbnRyb2xsZXIoJ1VzZXJDb250cm9sbGVyJywgVXNlckNvbnRyb2xsZXIpXG4gICAgLmNvbXBvbmVudCgnb3RzVXNlcicsIG90c1VzZXIpO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
