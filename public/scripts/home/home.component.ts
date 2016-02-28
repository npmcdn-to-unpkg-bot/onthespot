import {Component} from 'angular2/core';
import AuthService from 'app/auth/auth.service';

@Component({
  selector: 'home',
  template: `Hello, {{ name }}`,
  providers: [AuthService]
})
class HomeComponent {
  name:string;

  constructor(authService:AuthService) {
    this.name = 'Steve';
    authService.login({}).then(function (result) {
      console.log('Async result: %o', result)
    })
  }
}

export default HomeComponent