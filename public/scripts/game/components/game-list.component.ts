import {Component} from 'angular2/core';

import GameService from 'app/game/services/game.service';

@Component({
  selector: 'game-list',
  templateUrl: 'scripts/base/componenets/onthespot.html',
  providers: [GameService]
})
class GameListComponent {
  constructor(private _gameService: GameService) {
    this.list = _gameService.getList()
  }

}
export default GameListComponent;