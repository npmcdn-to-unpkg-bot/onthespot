import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'screen',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <a href="">
       <h3 [textContent]="game.title"></h3>
    </a>
  `
})
  /**
   *
   */
class ScreenComponent {
  @Input() game:any;

  constructor() {
  }
}
export default ScreenComponent;