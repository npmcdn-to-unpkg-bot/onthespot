import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// Child route components
import GameListComponent from 'app/game/components/game-list.component';
import GameManagerComponent from 'app/game/components/game-manager.component';
import GameDetailsComponent from 'app/game/components/game-details.component';

@Component({
  selector: 'game-dashboard',
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  {
    path: '/list',
    name: 'GameList',
    component: GameListComponent
  },
  {
    path: '/details/:title',
    name: 'GameDetails',
    component: GameDetailsComponent
  },
  {
    path: '/manage',
    name: 'Manage',
    component: GameManagerComponent
  }
])
class GameDashboardComponent {
  constructor() {
    console.log('Dashboard()')
  }
}
export default GameDashboardComponent;