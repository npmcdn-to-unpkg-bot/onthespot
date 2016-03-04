import 'firebase';
const REF = new Firebase("https://on-the-spot.firebaseio.com/");

class FirebaseService {
  constructor() {

  }

  /**
   * @method authorize
   * @description
   * Logs the user in via Firebase.
   * @param user The user object with name and token to log in.
   * @returns {Promise<any>}
   */
  authorize(user) {
    return new Promise(function(resolve, reject){
      REF.authWithCustomToken(user.token, function (err, authData) {
        return err ? reject(err) : resolve(authData);
      })
    })
  }

  deauthorize() {
    REF.unauth();
  }
}

export {REF, FirebaseService}