import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import GameListComponent from 'app/game/components/game-list.component';

@Component({
  selector: 'on-the-spot',
  templateUrl: 'scripts/base/onthespot.html',
  directives: [ROUTER_DIRECTIVES, GameListComponent],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/game', name: 'Game List', component: GameListComponent}
])
class OnTheSpot {
  constructor(){}
}
export default OnTheSpot;