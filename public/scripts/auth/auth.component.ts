import {Component, Output} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import AuthService from 'app/auth/auth.service';
import IAuth from 'app/auth/IAuth.interface';
import User from 'app/auth/User';

@Component({
  selector: 'authenticate',
  templateUrl: 'scripts/auth/auth.component.html',
  providers: [AuthService, FORM_DIRECTIVES]
})
class AuthComponent {
  user:IAuth;

  constructor(private authService:AuthService) {
    this.user = new User();
  }

  /**
   * @method authorize
   * Authorizes with Firebase and logs in.
   * @description
   */
  authorize() {
    this.authService
      .authorize(this.user)
      .then(() => {
        // Route elsewhere

      })
  }
}

export default AuthComponent
