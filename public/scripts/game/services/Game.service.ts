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
    return this.ref.observe('value');
  }
}
export default GameService;