// Shoutouts to http://www.jingpingji.com/blog/2015/8/4/transferring-sound-data-with-binaryjs-and-buffering-for-smooth-playbac
import {Injectable} from 'angular2/core';

import AudioBase from './AudioBase';
import Playback from './Playback';

/**
 * @class Recorder
 * @description
 * Handles recording and transport of audio data to server and connected channels.
 * @example
 * Record 5 seconds of audio and stop:

 recorder.initialize().then(instance => {
      instance.start();
      setTimeout(() => {
        instance.stop();
      }, 5000)
    });
 *
 */
@Injectable()
class Recorder extends AudioBase {
  playback: Playback;
  recording:boolean = false;

  // Stream object from the result of getMediaDevices. In this case, just audio.
  stream:any;

  constructor() {
    super();
    this.playback = new Playback();
  }

  /**
   * @method initialize
   * @description
   * Grabs the media devices, hooks up everything and hooks up
   * @returns {Promise<Recorder>}
   */
  initialize() {
    return this.getMediaDevices({
        audio: true,
        video: false
      })
      .then(stream => {
        var context = this.audioContext;
        var audioInput = context.createMediaStreamSource(stream);

        // create a javascript node
        window.recorder = context.createScriptProcessor(2048, 1, 1);

        // specify the processing function
        window.recorder.onaudioprocess = e => this.recorderProcess(e);

        // connect stream to our recorder
        audioInput.connect(window.recorder);

        // connect our recorder to the previous destination
        window.recorder.connect(context.destination);

        this.playback.listen();

        return this;
      })
      .catch(err => {
        console.log("The following error occurred: " + err.name);
      })
  }

  /**
   * Start recording.
   */
  start() {
    if (this.recording === false) {
      console.log('>>> Start Recording');

      //open binary stream
      // TODO: Pass in subscribed channel information into createStream for meta
      this.stream = this.client.createStream({
        data: 'audio',
        channel: 'somechannel'
      });
      this.recording = true;
    }
  }

  /**
   * Stops and disconnects
   */
  stop() {
    if (this.recording === true) {
      console.log('Stopping recording');
      this.recording = false;

      //close binary stream
      this.stream.end();
    }
    window.recorder.disconnect(this.audioContext.destination);
  }

  /**
   *
   * @param e
   */
  recorderProcess(e) {
    if (this.recording === true) {
      this.stream.write(e.inputBuffer.getChannelData(0));
    }
  }
}
export default Recorder;