;
(function (global) {
  'use strict';

  var BUFFER_SIZE = 2048;

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

    /**
     *
     * @param buffer
     * @returns {ArrayBuffer}
     */
    convertFloat32ToInt16(buffer) {
      l = buffer.length;
      buf = new Int16Array(l);
      while (l--) {
        buf[l] = Math.min(1, buffer[l]) * 0x7FFF;
      }
      return buf.buffer;
    }
  }

  /**
   *
   */
  class Recorder extends AudioBase {

    /* @ngInject */
    constructor() {
      super();

      this.recording = false;

      if (!global.navigator.mediaDevices) {
        console.log("getUserMedia() not supported.");
      }
    }

    initialize() {
      return navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: false
        })
        .then(stream => {
          var context = this.audioContext;
          var audioInput = context.createMediaStreamSource(stream);

          // create a javascript node
          this.recorder = context.createScriptProcessor(BUFFER_SIZE, 1, 1);

          // specify the processing function
          this.recorder.onaudioprocess = e => {
            this.recorderProcess(e);
          };

          // connect stream to our recorder
          audioInput.connect(this.recorder);

          // connect our recorder to the previous destination
          this.recorder.connect(context.destination);
          return this;
        })
        .catch(err => {
          console.log("The following error occured: " + err.name);
        })
    }

    /**
     * Start recording.
     */
    start() {
      if (this.recording === false) {
        console.log('>>> Start Recording');

        //open binary stream
        this.stream = this.client.createStream({data: 'audio'});
        this.recording = true;
      }
    }

    /**
     *
     */
    stop() {
      if (this.recording === true) {
        this.recording = false;

        //close binary stream
        this.stream.end();
      }
    }

    /**
     *
     * @param e
     */
    recorderProcess(e) {
      var left = e.inputBuffer.getChannelData(0);
      if (this.recording === true) {
        //var chunk = this.convertFloat32ToInt16(left);
        var chunk = left;
        this.stream.write(chunk);
      }
    }
  }

  /**
   * Class handling audio playback.
   */
  class Playback extends AudioBase {
    constructor() {
      super();

      this.nextTime = 0;
      this.init = false;
      this.audioCache = [];

      this.client.on('stream', (stream) => {
        this.onStream();

        stream.on('data', data => {
          this.handleDataStream(data)
        });
        stream.on('end', () => {
          this.offStream();
        });
      });
    }

    /**
     * Plays the current cache.
     */
    playCache(cache) {
      if(!cache || !cache.length) return;

      while (cache.length) {
        var buffer = cache.shift();
        var source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(this.audioContext.destination);

        if (this.nextTime == 0) {
          // add a delay of 0.05 seconds
          this.nextTime = this.audioContext.currentTime + 0.05;
        }
        source.start(this.nextTime);

        // schedule buffers to be played consecutively
        this.nextTime += source.buffer.duration;
      }
    }

    /**
     * Handles the incoming stream data.
     */
    onStream() {
      console.log('>>> Receiving Audio Stream');
      this.nextTime = 0;
      this.init = false;
      this.audioCache = [];
    }

    /**
     * Standin function for handling end of stream.
     */
    offStream() {
      console.log('||| End of Audio Stream');
    }

    handleDataStream(data) {
      var array = new Float32Array(data);
      var buffer = this.audioContext.createBuffer(1, 2048, 44100);
      buffer.copyToChannel(array, 0);

      this.audioCache.push(buffer);
      // make sure we put at least 5 chunks in the buffer before starting
      if (
        (this.init === true) ||
        ((this.init === false)
        && (this.audioCache.length > 5))) {
        this.init = true;
        this.playCache(this.audioCache);
      }
    }
  }

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

  angular.module('ots.game')
    .service('chatService', ChatService);
})(window);