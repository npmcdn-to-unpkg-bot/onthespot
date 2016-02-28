import {Component} from 'angular2/core';
import AuthService from './auth.service';

@Component({
  selector: 'authenticate',
  template: '<h1>Please Log in</h1>',
  providers: [AuthService]
})
class AuthComponent {
  constructor(private authService:AuthService){
    console.log('Auth component:', authService);
  }
}

export default AuthComponent
