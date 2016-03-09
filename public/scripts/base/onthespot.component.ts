import {ViewEncapsulation, Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {GameListComponent} from 'app/game/components/game-list.component';
import {GameService} from 'app/game/services/game.service';
import {ScreenComponent} from 'app/game/components/screen.component';


@Component({
  selector: 'on-the-spot',
  providers: [GameService],

  // Appearance
  templateUrl: 's/base/on-the-spot.html',
  styleUrls: ['s/base/on-the-spot.css'],

  // Bindings
  directives: [ROUTER_DIRECTIVES, ScreenComponent],
  providers: [
    ROUTER_PROVIDERS,
    GameService
  ]
})
@RouteConfig([
  {path: '/list', name: 'GameList', component: GameListComponent}
])
class OnTheSpot {
  constructor() {

  }
}
export default OnTheSpot