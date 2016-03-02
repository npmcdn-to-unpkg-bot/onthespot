import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: `Hello, {{ name }}`
})
class HomeComponent {
  name:string;

  constructor() {
    this.name = 'Steve';
  }
}

export default HomeComponent