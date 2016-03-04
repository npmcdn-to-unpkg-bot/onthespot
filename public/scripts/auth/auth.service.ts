import {Inject, Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {FirebaseService} from 'app/firebase/Firebase.service';

import {IAuthCredentials} from './IAuthCredentials.interface';

@Injectable()
class AuthService {
  headers:Headers;

  firebaseService:FirebaseService;

  constructor(private http:Http) {
    // Set HTTP headers application/json
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.firebaseService = new FirebaseService();
  }

  /**
   * @method generateToken
   * Generates a Firebase JWT token and logs in.
   * @param user
   */
  authorize(user) {
    this.http
      .post('/auth/generate/', JSON.stringify({user: user}), {
        headers: this.headers
      })
      .map((response:Response) => response.json())
      .subscribe(
        token => {
        let build = Object.assign(user, token);
        this.firebaseService.authorize(build)
          .then(authData => {
            console.log('Logged in.');
          })
      },
        err => console.warn('Err:', err)
    );
  }
}

export default AuthService;