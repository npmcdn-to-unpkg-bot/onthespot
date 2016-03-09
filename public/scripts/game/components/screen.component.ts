import {ViewEncapsulation, Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'screen',
  directives: [ROUTER_DIRECTIVES],
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['s/game/components/screen.css'],
  template: `
    <a>
       <h3>Some text here</h3>
    </a>
  `
})
  /**
   *
   */
class ScreenComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
export { ScreenComponent };