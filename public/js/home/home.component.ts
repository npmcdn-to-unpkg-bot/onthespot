import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: 'Hello there!'
})
class HomeComponent {
  message:string;

  constructor(){
    this.message = 'Hello Steve';
    console.log('Booted:', this.message);
  }
}

export default HomeComponent