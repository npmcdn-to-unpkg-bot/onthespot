import 'firebase';
const REF = new Firebase("https://on-the-spot.firebaseio.com/");

class FirebaseService {
  constructor() {

  }

  authorize(user) {
    console.log('Authorizing', user);
    REF.authWithCustomToken(user.token, function (err, authData) {
      console.warn(err, authData);
    })
  }

  deauthorize() {
    REF.unauth();
  }
}

export {REF, FirebaseService}