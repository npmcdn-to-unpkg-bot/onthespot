import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import {IAuthCredentials, IUser} from './IAuthCredentials.interface';

@Injectable()
class AuthService {

  constructor(private http:Http) {
  }

  /**
   * @method login
   * @description
   * Logs user in with supplied credentials.
   * @param creds IAuthCredentials
   * @returns {Promise<IUser>}
   */
  login(creds:IAuthCredentials):Promise<IUser> {
    return new Promise(function (resolve, reject) {
      resolve({username: 'Steve-O'})
    })
  }

  logout():Promise<void> {
    console.log('Logged out.');
    return new Promise(function (resolve, reject) {
      // void
    })
  }
}

export default AuthService;