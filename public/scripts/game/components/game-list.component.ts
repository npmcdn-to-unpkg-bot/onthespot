import {Component} from 'angular2/core';

import GameService from 'app/game/services/game.service';
import ScreenComponent from './screen.component';

@Component({
  selector: 'game-list',
  templateUrl: 'scripts/game/components/game-list.html',
  directives: [ScreenComponent],
  providers: [GameService]
})
class GameListComponent {
  private list:Array;

  constructor(private _gameService:GameService) {

    // Gets the list of games immediately
    _gameService.getList(snap => {
      this.list = snap.val();
    });

    _gameService.getAnswers('colors')
      .then(res =>{
        console.log(res)
      })
      .catch(nope => {
        console.warn(nope)
      })
  }

  /**
   * @method startGame
   * @description
   * Redirects to the chosen game.
   * @param game
   */
  startGame(game) {
    console.log('Going to', game);
  }
}
export default GameListComponent;