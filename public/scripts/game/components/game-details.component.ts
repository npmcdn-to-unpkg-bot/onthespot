import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {GameService} from 'app/game/services/game.service';

@Component({
  selector: 'game-details',
  template: '<pre>{{game | json}}</pre>'
})
class GameDetailsComponent {
  private game:any;
  constructor(private params: RouteParams){
    this.game = params.params;
  }

}
export default GameDetailsComponent;