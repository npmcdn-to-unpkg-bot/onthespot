// Shoutouts to
// http://www.jingpingji.com/blog/2015/8/4/transferring-sound-data-with-binaryjs-and-buffering-for-smooth-playbac
/**
 * Main service class.
 */
class ChatService {

  /* @ngInject */
  constructor($window, $log) {
    this.$log = $log;
    this.$window = $window;
  }

  getRecorder() {
    return new Recorder();
  }

  getPlayback() {
    return new Playback();
  }
}