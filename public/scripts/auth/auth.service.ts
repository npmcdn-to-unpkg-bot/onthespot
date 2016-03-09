import {Inject, Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import {IAuth} from './IAuth.interface';
import FirebaseFactory from 'app/firebase/firebase.factory';

@Injectable()
class AuthService {
  headers:Headers;

  constructor(private http:Http) {

    // Set HTTP headers application/json
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  /**
   * @method generateToken
   * Generates a Firebase JWT token and logs in.
   * @param user
   */
  authorize(user) {
    var firebase = FirebaseFactory.get();

    return this.http
      .post('/auth/generate/', JSON.stringify({user: user}), {
        headers: this.headers
      })
      .map((response:Response) => response.json())
      .toPromise()
      .then(result => {

        // TODO: Do something with token here
        firebase.authWithCustomToken(result.token, function (err, authData) {
          console.log('Auth with token:', err, authData);
        });
      })
      .catch(err => console.warn(err));
  }
}

export default AuthService;