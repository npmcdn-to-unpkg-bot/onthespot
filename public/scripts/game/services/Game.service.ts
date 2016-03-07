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
  getList(cb) {
    return this.ref.on('value', cb);
  }

  /**
   * @method getAnswers
   * @description
   * Retrieves the answer list for the supplied game title.
   * @param title {String} Name of the game.
   * @returns {Promise<Array>|}
   */
  getAnswers(title?:string) {
    return new Promise(function (resolve, reject) {

      FirebaseFactory.get('answers').orderByKey().once('value', function (snap) {
        snap.forEach(function (res) {
          if (res.key() === title) {
            resolve(snap.val());
          }
        });
        reject(`No answers for ${title}`);
      })
    });
  }
}
export default GameService;