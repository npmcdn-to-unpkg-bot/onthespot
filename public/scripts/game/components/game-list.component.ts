import {Component} from 'angular2/core';
import {GameService} from 'app/game/services/game.service';

@Component({
  selector: 'game-list',
  template: `
    <h2>Game List</h2>
  `
})
class GameListComponent {
  constructor(private _gameService:GameService){
    console.log(`GameList constructor(): ${_gameService}`);
  }
}
export {GameListComponent}