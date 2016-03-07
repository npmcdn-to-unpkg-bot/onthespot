import FirebaseFactory from 'app/firebase/Firebase.factory';

class GameService {
  ref:Firebase;

  /**
   *
   * @param data
   * @returns {{title: any, id: any}}
   */
  static getInstance(data){
    let key = Object.keys(data);
    return {
      title: key[0],
      description: data[key].description
    }
  }

  constructor() {
    // Get a new firebase object at /games
    this.ref = FirebaseFactory.get('games');
  }

  /**
   * @method getGameList
   * @description
   * Retrieves the list of games.
   */
  getList(cb) {
    return this.ref.on('value', function(snap){
      let value = snap.val();
      value = Array.isArray(value) ? value : [value];

      cb(value.map(game => GameService.getInstance(game)));
    });
  }

  /**
   * TODO
   * @param title
   * @returns {{description: string}}
   */
  getDetails(title:string){
    return {
      description: 'Todo'
    }
  }

  /**
   * @method getAnswers
   * @description
   * Retrieves the answer list for the supplied game title.
   * @param title {String} Name of the game.
   * @returns {Promise<Array>|}
   */
  getAnswers(title?:string) {
    if(!title)
      console.warn('getAnswers() title parameter is empty. TODO Default behavior.');

    return new Promise(function (resolve, reject) {
      FirebaseFactory.get('answers').orderByKey().once('value', function (snap) {
        var found = false;

        snap.forEach(function (res) {
          if (res.key() === title) {
            found = true;
            resolve(res.val());
          }
        });
        if (!found)
          reject(`No answers for ${title}`);
      })
    });
  }
}
export default GameService;