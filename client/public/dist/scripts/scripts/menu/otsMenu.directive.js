'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
  'use strict';

  var MenuComponentController = (function () {

    /* @ngInject */

    function MenuComponentController($state, rpcService) {
      _classCallCheck(this, MenuComponentController);

      this.rpcService = rpcService;
      this.$state = $state;

      rpcService.getCategories(function (res) {
        console.log('Categories', res);
      });
    }
    MenuComponentController.$inject = ["$state", "rpcService"];

    /**
     * Go to game create
     */

    _createClass(MenuComponentController, [{
      key: 'create',
      value: function create() {
        this.$state.go('game.create');
      }
    }]);

    return MenuComponentController;
  })();

  var MenuComponent = {
    templateUrl: 'templates/menu/otsMenu.html',
    controller: MenuComponentController
  };

  angular.module('ots').component('otsMenu', MenuComponent);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90c01lbnUuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsQ0FBQyxZQUFVO0FBQ1YsY0FBWSxDQUFDOztNQUVQLHVCQUF1Qjs7OztBQUczQixhQUhJLHVCQUF1QixDQUdmLE1BQU0sRUFBRSxVQUFVLEVBQUM7NEJBSDNCLHVCQUF1Qjs7QUFJekIsVUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLGdCQUFVLENBQUMsYUFBYSxDQUFDLFVBQVMsR0FBRyxFQUFDO0FBQ3BDLGVBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQ2hDLENBQUMsQ0FBQTtLQUNIOzs7OztBQUFBO2lCQVZHLHVCQUF1Qjs7K0JBZW5CO0FBQ04sWUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7T0FDOUI7OztXQWpCRyx1QkFBdUI7OztBQW1CN0IsTUFBSSxhQUFhLEdBQUc7QUFDbEIsZUFBVyxFQUFFLDZCQUE2QjtBQUMxQyxjQUFVLEVBQUUsdUJBQXVCO0dBQ3BDLENBQUM7O0FBRUYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQzNELENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvbWVudS9vdHNNZW51LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNsYXNzIE1lbnVDb21wb25lbnRDb250cm9sbGVyIHtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZSwgcnBjU2VydmljZSl7XG4gICAgICB0aGlzLnJwY1NlcnZpY2UgPSBycGNTZXJ2aWNlO1xuICAgICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG5cbiAgICAgIHJwY1NlcnZpY2UuZ2V0Q2F0ZWdvcmllcyhmdW5jdGlvbihyZXMpe1xuICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZWdvcmllcycsIHJlcyk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdvIHRvIGdhbWUgY3JlYXRlXG4gICAgICovXG4gICAgY3JlYXRlKCl7XG4gICAgICB0aGlzLiRzdGF0ZS5nbygnZ2FtZS5jcmVhdGUnKVxuICAgIH1cbiAgfVxuICB2YXIgTWVudUNvbXBvbmVudCA9IHtcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tZW51L290c01lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogTWVudUNvbXBvbmVudENvbnRyb2xsZXJcbiAgfTtcblxuICBhbmd1bGFyLm1vZHVsZSgnb3RzJykuY29tcG9uZW50KCdvdHNNZW51JywgTWVudUNvbXBvbmVudCk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
