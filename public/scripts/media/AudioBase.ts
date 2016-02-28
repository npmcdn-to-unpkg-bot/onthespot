const BUFFER_SIZE = 2048;

/**
 * Parent class for creating common assets in Playback and record.
 * Sets the audioContext and BinaryClient on `this`, as well as the
 * window.navigator.mediaDevices based on a X-browser method.
 */
class AudioBase {
  constructor() {
    var host = location.origin.replace(/^http/, 'ws') + '/binserver';
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.client = new BinaryClient(host);

    global.navigator.mediaDevices = this.getMediaDevices();
  }

  /**
   * Sets the cross browser media devices.
   * @returns {*}
   */
  getMediaDevices() {
    return global.navigator.mediaDevices ||
      ((global.navigator.mozGetUserMedia || global.navigator.webkitGetUserMedia) ? {
        getUserMedia: function (c) {
          return new Promise(function (y, n) {
            (global.navigator.mozGetUserMedia ||
            global.navigator.webkitGetUserMedia).call(global.navigator, c, y, n);
          });
        }
      } : null);
  }
}