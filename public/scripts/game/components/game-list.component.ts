import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

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

  constructor(private _gameService:GameService,
              private _router:Router) {

    // Gets the list of games immediately
    _gameService.getList(snap => {
      this.list = snap.val();
    });
  }

  /**
   * @method startGame
   * @description
   * Redirects to the chosen game.
   * @param game
   */
  openGame(game) {
    if(!game){
      console.log('No game specified');
    }
    this._gameService.getAnswers(game.title.toLowerCase())
      .then(res => {
        console.log(res)
      })
      .catch(nope => {
        console.warn(nope)
      })
  }
}
export default GameListComponent;