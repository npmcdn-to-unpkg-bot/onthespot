import {Component} from 'angular2/core';

import GameService from 'app/game/services/game.service';
import ScreenComponent from './screen.component';

@Component({
  selector: 'game-list',
  directives: [ScreenComponent],
  providers: [GameService],
  template: `
  <h4>Choose your game</h4>
  <screen *ngFor="#game of list" [game]="game"></screen>`
})
class GameListComponent {
  private list:Array;

  constructor(private gameService:GameService) {

    // Gets the list of games immediately
    gameService.getList(results => {
      this.list = results
      console.log(this.list)
    });
  }

  /**
   * @method startGame
   * @description
   * Redirects to the chosen game.
   * @param game
   */
  openGame(game) {
    if (!game)
      console.log('No game specified');

    this.gameService.getAnswers(game.title.toLowerCase())
      .then(res => {
        console.log(res)
      })
      .catch(nope => {
        console.warn(nope)
      })
  }
}
export default GameListComponent;