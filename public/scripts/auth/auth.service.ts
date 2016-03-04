import {Inject, Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {FirebaseService} from 'app/firebase/Firebase.service';

import {IAuthCredentials, IUser} from './IAuthCredentials.interface';

@Injectable()
class AuthService {
  headers:Headers;

  fireToken:any;
  firebaseService:FirebaseService;

  user:IUser;

  constructor(private http:Http) {
    // Set HTTP headers application/json
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.firebaseService = new FirebaseService();
  }

  /**
   * @method login
   */
  login() {
    this.firebaseService.authorize(this.user)
  }

  /**
   * @method generateToken
   * @param user
   */
  generateToken(user:IUser) {
    this.http
      .post('/auth/generate/', JSON.stringify({user: user}), {
        headers: this.headers
      })
      .map((response:Response) => response.json())
      .subscribe(
        token => {
          this.user = Object.assign(user, token);
          this.login();
        },
        err => console.warn('Err:', err)
    );
  }
}

export default AuthService;