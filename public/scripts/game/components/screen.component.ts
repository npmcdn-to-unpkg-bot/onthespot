import {Component, Input} from 'angular2/core';

@Component({
  selector: 'screen',
  template: `
    <div>
        <h3 [textContent]="title"></h3>
    </div>
  `
})
  /**
   *
   */
class ScreenComponent {
  @Input() title:string;

  constructor() {
    console.log('Screen', this)
  }
}
export default ScreenComponent;