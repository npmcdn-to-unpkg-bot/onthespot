/**
 * Base class for creating common assets in Playback and record.
 * Sets the audioContext and BinaryClient on `this`, as well as the
 * window.navigator.mediaDevices based on a X-browser method.
 */
class AudioBase {
  // Audio context object for manipulation / streaming.
  audioContext:any;

  // The BinaryClient instance
  client:any;

  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.client = new BinaryClient('ws://localhost:9000');
  }

  /**
   * Sets the cross browser media devices.
   * @returns {*}
   */
  getMediaDevices(opts) {
    return new Promise(function(resolve, reject){
      return window.navigator.webkitGetUserMedia.call(window.navigator, opts, resolve, reject);
    });
  }
}
export default AudioBase;