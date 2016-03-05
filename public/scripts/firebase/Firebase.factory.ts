import 'firebase';
// Makes Firebase events observable
// https://gist.github.com/gsoltis/ee20138502a4764650f2
!function () {
  var makeCallback = function (eventType, observer) {
    if (eventType === 'value') {
      return function (snap) {
        observer.onNext(snap);
      };
    } else {
      return function (snap, prevName) {
        // Wrap into an object, since we can only pass one argument through.
        observer.onNext({snapshot: snap, prevName: prevName});
      }
    }
  };

  Firebase.prototype.__proto__.observe = function (eventType) {
    var query = this;
    return Rx.Observable.create(function (observer) {
      var listener = query.on(eventType, makeCallback(eventType, observer), function (error) {
        observer.onError(error);
      });
      return function () {
        query.off(eventType, listener);
      }
    }).publish().refCount();
  };
}();

class FirebaseFactory {

  static get(path:string = ''):Firebase {
    return new Firebase(`https://on-the-spot.firebaseio.com/${path}`);
  }
}
export default FirebaseFactory;