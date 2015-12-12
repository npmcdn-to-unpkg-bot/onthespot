'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
// Shoutouts to
// http://www.jingpingji.com/blog/2015/8/4/transferring-sound-data-with-binaryjs-and-buffering-for-smooth-playbac
(function (global) {
  'use strict';

  var BUFFER_SIZE = 2048;

  /**
   * Parent class for creating common assets in Playback and record.
   * Sets the audioContext and BinaryClient on `this`, as well as the
   * window.navigator.mediaDevices based on a X-browser method.
   */

  var AudioBase = (function () {
    function AudioBase() {
      _classCallCheck(this, AudioBase);

      var host = location.origin.replace(/^http/, 'ws') + '/binserver';
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.client = new BinaryClient(host);

      global.navigator.mediaDevices = this.getMediaDevices();
    }

    /**
     * Sets the cross browser media devices.
     * @returns {*}
     */

    _createClass(AudioBase, [{
      key: 'getMediaDevices',
      value: function getMediaDevices() {
        return global.navigator.mediaDevices || (global.navigator.mozGetUserMedia || global.navigator.webkitGetUserMedia ? {
          getUserMedia: function getUserMedia(c) {
            return new Promise(function (y, n) {
              (global.navigator.mozGetUserMedia || global.navigator.webkitGetUserMedia).call(global.navigator, c, y, n);
            });
          }
        } : null);
      }
    }]);

    return AudioBase;
  })();

  /**
   *
   */

  var Recorder = (function (_AudioBase) {
    _inherits(Recorder, _AudioBase);

    /* @ngInject */

    function Recorder() {
      _classCallCheck(this, Recorder);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Recorder).call(this));

      _this.recording = false;

      if (!global.navigator.mediaDevices) {
        console.log("getUserMedia() not supported.");
      }
      return _this;
    }

    _createClass(Recorder, [{
      key: 'initialize',
      value: function initialize() {
        var _this2 = this;

        return navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        }).then(function (stream) {
          var context = _this2.audioContext;
          var audioInput = context.createMediaStreamSource(stream);

          // create a javascript node
          global.recorder = context.createScriptProcessor(BUFFER_SIZE, 1, 1);

          // specify the processing function
          global.recorder.onaudioprocess = function (e) {
            _this2.recorderProcess(e);
          };

          // connect stream to our recorder
          audioInput.connect(global.recorder);

          // connect our recorder to the previous destination
          global.recorder.connect(context.destination);
          return _this2;
        }).catch(function (err) {
          console.log("The following error occurred: " + err.name);
        });
      }

      /**
       * Start recording.
       */

    }, {
      key: 'start',
      value: function start() {
        if (this.recording === false) {
          console.log('>>> Start Recording');

          //open binary stream
          // TODO: Pass in subscribed channel information into createStream for meta
          this.stream = this.client.createStream({ data: 'audio', channel: 'stevechannel_1239c' });
          this.recording = true;
        }
      }

      /**
       * Stops and disconnects
       */

    }, {
      key: 'stop',
      value: function stop() {
        if (this.recording === true) {
          console.log('Stopping recording');
          this.recording = false;

          //close binary stream
          this.stream.end();
        }
        global.recorder.disconnect(this.audioContext.destination);
      }

      /**
       *
       * @param e
       */

    }, {
      key: 'recorderProcess',
      value: function recorderProcess(e) {
        if (this.recording === true) {
          this.stream.write(e.inputBuffer.getChannelData(0));
        }
      }
    }]);

    return Recorder;
  })(AudioBase);

  /**
   * Class handling audio playback.
   */

  var Playback = (function (_AudioBase2) {
    _inherits(Playback, _AudioBase2);

    function Playback() {
      _classCallCheck(this, Playback);

      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Playback).call(this));

      _this3.nextTime = 0;
      _this3.init = false;
      _this3.audioCache = [];

      _this3.client.on('stream', function (stream) {
        _this3.onStream();

        stream.on('data', function (data) {
          _this3.handleDataStream(data);
        });
        stream.on('end', function () {
          _this3.offStream();
        });
      });
      return _this3;
    }

    /**
     * Plays the current cache.
     */

    _createClass(Playback, [{
      key: 'playCache',
      value: function playCache(cache) {
        if (!cache || !cache.length) {
          console.log('No cache or cache length = 0', cache);
          this.stop();
        }
        var source,
            delay = this.audioContext.createDelay(1);

        while (cache.length) {
          source = this.audioContext.createBufferSource();
          source.connect(delay);
          source.buffer = cache.shift();

          source.connect(this.audioContext.destination);
          source.start(0);
        }
      }

      /**
       * Handles the incoming stream data.
       */

    }, {
      key: 'onStream',
      value: function onStream() {
        console.log('>>> Receiving Audio Stream');
        this.time = 0;
        this.init = false;
        this.audioCache = [];
      }

      /**
       * Standin function for handling end of stream.
       */

    }, {
      key: 'offStream',
      value: function offStream() {
        console.log('||| End of Audio Stream');
      }
    }, {
      key: 'handleDataStream',
      value: function handleDataStream(data) {
        var array = new Float32Array(data);
        var buffer = this.audioContext.createBuffer(1, 2048, 44100);
        buffer.copyToChannel(array, 0);

        this.audioCache.push(buffer);
        // make sure we put at least 5 chunks in the buffer before starting
        if (this.init === true || this.init === false && this.audioCache.length > 5) {
          this.init = true;
          this.playCache(this.audioCache);
        }
      }
    }]);

    return Playback;
  })(AudioBase);

  /**
   * Main service class.
   */

  var ChatService = (function () {

    /* @ngInject */

    function ChatService($window, $log) {
      _classCallCheck(this, ChatService);

      this.$log = $log;
      this.$window = $window;
    }
    ChatService.$inject = ["$window", "$log"];

    _createClass(ChatService, [{
      key: 'getRecorder',
      value: function getRecorder() {
        return new Recorder();
      }
    }, {
      key: 'getPlayback',
      value: function getPlayback() {
        return new Playback();
      }
    }]);

    return ChatService;
  })();

  angular.module('ots.game').service('chatService', ChatService);
})(window);
//# sourceMappingURL=data:application/json;base64,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QUksUUFBUSxFQUFFLENBQUM7T0FDdkI7OztXQWRHLFdBQVc7OztBQWlCakIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDdkIsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztDQUN4QyxDQUFBLENBQUUsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoic2NyaXB0cy9nYW1lL3NlcnZpY2VzL2JpbkF1ZGlvLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7XG4vLyBTaG91dG91dHMgdG9cbi8vIGh0dHA6Ly93d3cuamluZ3BpbmdqaS5jb20vYmxvZy8yMDE1LzgvNC90cmFuc2ZlcnJpbmctc291bmQtZGF0YS13aXRoLWJpbmFyeWpzLWFuZC1idWZmZXJpbmctZm9yLXNtb290aC1wbGF5YmFjXG4oZnVuY3Rpb24gKGdsb2JhbCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIEJVRkZFUl9TSVpFID0gMjA0ODtcblxuICAvKipcbiAgICogUGFyZW50IGNsYXNzIGZvciBjcmVhdGluZyBjb21tb24gYXNzZXRzIGluIFBsYXliYWNrIGFuZCByZWNvcmQuXG4gICAqIFNldHMgdGhlIGF1ZGlvQ29udGV4dCBhbmQgQmluYXJ5Q2xpZW50IG9uIGB0aGlzYCwgYXMgd2VsbCBhcyB0aGVcbiAgICogd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMgYmFzZWQgb24gYSBYLWJyb3dzZXIgbWV0aG9kLlxuICAgKi9cbiAgY2xhc3MgQXVkaW9CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHZhciBob3N0ID0gbG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJykgKyAnL2JpbnNlcnZlcic7XG4gICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICAgICAgdGhpcy5jbGllbnQgPSBuZXcgQmluYXJ5Q2xpZW50KGhvc3QpO1xuXG4gICAgICBnbG9iYWwubmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHRoaXMuZ2V0TWVkaWFEZXZpY2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3Jvc3MgYnJvd3NlciBtZWRpYSBkZXZpY2VzLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldE1lZGlhRGV2aWNlcygpIHtcbiAgICAgIHJldHVybiBnbG9iYWwubmF2aWdhdG9yLm1lZGlhRGV2aWNlcyB8fFxuICAgICAgICAoKGdsb2JhbC5uYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8IGdsb2JhbC5uYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKSA/IHtcbiAgICAgICAgICBnZXRVc2VyTWVkaWE6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHksIG4pIHtcbiAgICAgICAgICAgICAgKGdsb2JhbC5uYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8XG4gICAgICAgICAgICAgIGdsb2JhbC5uYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKS5jYWxsKGdsb2JhbC5uYXZpZ2F0b3IsIGMsIHksIG4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IDogbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjbGFzcyBSZWNvcmRlciBleHRlbmRzIEF1ZGlvQmFzZSB7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2U7XG5cbiAgICAgIGlmICghZ2xvYmFsLm5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRVc2VyTWVkaWEoKSBub3Qgc3VwcG9ydGVkLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgICAgLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgYXVkaW86IHRydWUsXG4gICAgICAgICAgdmlkZW86IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHN0cmVhbSA9PiB7XG4gICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmF1ZGlvQ29udGV4dDtcbiAgICAgICAgICB2YXIgYXVkaW9JbnB1dCA9IGNvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcblxuICAgICAgICAgIC8vIGNyZWF0ZSBhIGphdmFzY3JpcHQgbm9kZVxuICAgICAgICAgIGdsb2JhbC5yZWNvcmRlciA9IGNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKEJVRkZFUl9TSVpFLCAxLCAxKTtcblxuICAgICAgICAgIC8vIHNwZWNpZnkgdGhlIHByb2Nlc3NpbmcgZnVuY3Rpb25cbiAgICAgICAgICBnbG9iYWwucmVjb3JkZXIub25hdWRpb3Byb2Nlc3MgPSBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkZXJQcm9jZXNzKGUpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBjb25uZWN0IHN0cmVhbSB0byBvdXIgcmVjb3JkZXJcbiAgICAgICAgICBhdWRpb0lucHV0LmNvbm5lY3QoZ2xvYmFsLnJlY29yZGVyKTtcblxuICAgICAgICAgIC8vIGNvbm5lY3Qgb3VyIHJlY29yZGVyIHRvIHRoZSBwcmV2aW91cyBkZXN0aW5hdGlvblxuICAgICAgICAgIGdsb2JhbC5yZWNvcmRlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBmb2xsb3dpbmcgZXJyb3Igb2NjdXJyZWQ6IFwiICsgZXJyLm5hbWUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHJlY29yZGluZy5cbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLnJlY29yZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJz4+PiBTdGFydCBSZWNvcmRpbmcnKTtcblxuICAgICAgICAvL29wZW4gYmluYXJ5IHN0cmVhbVxuICAgICAgICAvLyBUT0RPOiBQYXNzIGluIHN1YnNjcmliZWQgY2hhbm5lbCBpbmZvcm1hdGlvbiBpbnRvIGNyZWF0ZVN0cmVhbSBmb3IgbWV0YVxuICAgICAgICB0aGlzLnN0cmVhbSA9IHRoaXMuY2xpZW50LmNyZWF0ZVN0cmVhbSh7ZGF0YTogJ2F1ZGlvJywgY2hhbm5lbDogJ3N0ZXZlY2hhbm5lbF8xMjM5Yyd9KTtcbiAgICAgICAgdGhpcy5yZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIGFuZCBkaXNjb25uZWN0c1xuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICBpZiAodGhpcy5yZWNvcmRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1N0b3BwaW5nIHJlY29yZGluZycpO1xuICAgICAgICB0aGlzLnJlY29yZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vY2xvc2UgYmluYXJ5IHN0cmVhbVxuICAgICAgICB0aGlzLnN0cmVhbS5lbmQoKTtcbiAgICAgIH1cbiAgICAgIGdsb2JhbC5yZWNvcmRlci5kaXNjb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgcmVjb3JkZXJQcm9jZXNzKGUpIHtcbiAgICAgIGlmICh0aGlzLnJlY29yZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZShlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgaGFuZGxpbmcgYXVkaW8gcGxheWJhY2suXG4gICAqL1xuICBjbGFzcyBQbGF5YmFjayBleHRlbmRzIEF1ZGlvQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLm5leHRUaW1lID0gMDtcbiAgICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWRpb0NhY2hlID0gW107XG5cbiAgICAgIHRoaXMuY2xpZW50Lm9uKCdzdHJlYW0nLCAoc3RyZWFtKSA9PiB7XG4gICAgICAgIHRoaXMub25TdHJlYW0oKTtcblxuICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCBkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZURhdGFTdHJlYW0oZGF0YSlcbiAgICAgICAgfSk7XG4gICAgICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMub2ZmU3RyZWFtKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheXMgdGhlIGN1cnJlbnQgY2FjaGUuXG4gICAgICovXG4gICAgcGxheUNhY2hlKGNhY2hlKSB7XG4gICAgICBpZiAoIWNhY2hlIHx8ICFjYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIGNhY2hlIG9yIGNhY2hlIGxlbmd0aCA9IDAnLCBjYWNoZSk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdmFyIHNvdXJjZSwgZGVsYXkgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVEZWxheSgxKTtcblxuICAgICAgd2hpbGUgKGNhY2hlLmxlbmd0aCkge1xuICAgICAgICBzb3VyY2UgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmNvbm5lY3QoZGVsYXkpO1xuICAgICAgICBzb3VyY2UuYnVmZmVyID0gY2FjaGUuc2hpZnQoKTtcblxuICAgICAgICBzb3VyY2UuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgIHNvdXJjZS5zdGFydCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBpbmNvbWluZyBzdHJlYW0gZGF0YS5cbiAgICAgKi9cbiAgICBvblN0cmVhbSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCc+Pj4gUmVjZWl2aW5nIEF1ZGlvIFN0cmVhbScpO1xuICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWRpb0NhY2hlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhbmRpbiBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgZW5kIG9mIHN0cmVhbS5cbiAgICAgKi9cbiAgICBvZmZTdHJlYW0oKSB7XG4gICAgICBjb25zb2xlLmxvZygnfHx8IEVuZCBvZiBBdWRpbyBTdHJlYW0nKTtcbiAgICB9XG5cbiAgICBoYW5kbGVEYXRhU3RyZWFtKGRhdGEpIHtcbiAgICAgIHZhciBhcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG4gICAgICB2YXIgYnVmZmVyID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyKDEsIDIwNDgsIDQ0MTAwKTtcbiAgICAgIGJ1ZmZlci5jb3B5VG9DaGFubmVsKGFycmF5LCAwKTtcblxuICAgICAgdGhpcy5hdWRpb0NhY2hlLnB1c2goYnVmZmVyKTtcbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBwdXQgYXQgbGVhc3QgNSBjaHVua3MgaW4gdGhlIGJ1ZmZlciBiZWZvcmUgc3RhcnRpbmdcbiAgICAgIGlmIChcbiAgICAgICAgKHRoaXMuaW5pdCA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgKCh0aGlzLmluaXQgPT09IGZhbHNlKSAmJiAodGhpcy5hdWRpb0NhY2hlLmxlbmd0aCA+IDUpKSkge1xuICAgICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXlDYWNoZSh0aGlzLmF1ZGlvQ2FjaGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIHNlcnZpY2UgY2xhc3MuXG4gICAqL1xuICBjbGFzcyBDaGF0U2VydmljZSB7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93LCAkbG9nKSB7XG4gICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB9XG5cbiAgICBnZXRSZWNvcmRlcigpIHtcbiAgICAgIHJldHVybiBuZXcgUmVjb3JkZXIoKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5YmFjaygpIHtcbiAgICAgIHJldHVybiBuZXcgUGxheWJhY2soKTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgnb3RzLmdhbWUnKVxuICAgIC5zZXJ2aWNlKCdjaGF0U2VydmljZScsIENoYXRTZXJ2aWNlKTtcbn0pKHdpbmRvdyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
