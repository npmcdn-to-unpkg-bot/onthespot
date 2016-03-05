import {Component, Output} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import AuthService from 'app/auth/auth.service';
import IAuthCredentials from 'app/auth/IAuthCredentials.interface';
import User from 'app/auth/User';
import GameService from 'app/game/services/Game.service';

@Component({
  selector: 'authenticate',
  templateUrl: 'scripts/auth/auth.component.html',
  providers: [AuthService, FORM_DIRECTIVES]
})
class AuthComponent {
  user:IAuthCredentials;
  gameService:GameService;

  constructor(private authService:AuthService) {
    this.user = new User();
    this.gameService = new GameService();
  }

  /**
   * @method authorize
   * Generates a token from Firebase.
   * @description
   */
  authorize() {
    this.authService
      .authorize(this.user)
      .then(() => {
        this.gameService.getList()
      })
  }
}

export default AuthComponent
