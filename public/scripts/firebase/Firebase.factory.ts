import 'firebase';

class FirebaseFactory {

  static get(path:string = ''):Firebase {
    return new Firebase(`https://on-the-spot.firebaseio.com/${path}`);
  }
}
export default FirebaseFactory;