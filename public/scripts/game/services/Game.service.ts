import FirebaseFactory from 'app/firebase/Firebase.factory';

class GameService {
  ref:Firebase;

  constructor() {
    this.ref = FirebaseFactory.get('games');
  }

  /**
   * @method getGameList
   * @description
   * Retrieves the list of games.
   */
  getList() {
    this.ref.once('value', snap => {
      console.log('gameList:', snap.val(), snap)
    })
  }
}
export default GameService;