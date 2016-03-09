import 'lodash';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import Firebase from 'firebase';
import FirebaseFactory from 'app/firebase/firebase.factory';

@Injectable()
class GameService {
  ref:Firebase;

  /**
   *
   * @param data
   * @returns {{title: any, id: any}}
   */
  static getInstance(data) {
    let key = Object.keys(data);
    return {
      title: key[0],
      description: data[key].description
    }
  }

  constructor() {
    this.ref = FirebaseFactory.get('games');
  }

  /**
   * @method getGameList
   * @description
   * Retrieves the list of games.
   */
  getList(cb) {
    return this.ref.on('value', function (snap) {
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
  getDetails(title:string) {
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
  getCategories(title?:string) {
    if (!title)
      console.warn('getAnswers() title parameter is empty. TODO Default behavior.');

    title = title.toLowerCase();

    return new Observable(observer => {
      FirebaseFactory.get('answers').orderByKey().once('value', function (snap) {
        snap.forEach(entry => {
          observer.next(entry)
        });
      })
    });
  }
}
export {GameService};