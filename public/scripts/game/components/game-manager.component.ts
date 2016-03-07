import {Component} from 'angular2/core';

@Component({
  selector: 'game-manager',
  template: 'Game Manager'
})
class GameManagerComponent {
  constructor(){
    console.log('GameManager()')
  }
}
export default GameManagerComponent;