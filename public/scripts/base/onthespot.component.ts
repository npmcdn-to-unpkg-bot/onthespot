import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import GameDashboardComponent from 'app/game/components/game-dashboard.component';

@Component({
  selector: 'on-the-spot',
  templateUrl: 'scripts/base/onthespot.html',
  directives: [ROUTER_DIRECTIVES, GameDashboardComponent],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/games/...',
    name: 'GamesDashboard',
    component: GameDashboardComponent
  }
])
class OnTheSpot {
  constructor() {
  }
}
export default OnTheSpot