import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

import GameListComponent from 'app/game/components/game-list.component';

@Component({
  selector: 'on-the-spot',
  templateUrl: 'scripts/base/onthespot.html',
  directives: [GameListComponent],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/game', name: 'Game List', component: GameListComponent, useAsDefault: true}
])
class OnTheSpot {
  constructor() {

  }
}
export default OnTheSpot;