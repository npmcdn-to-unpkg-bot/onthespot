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
        global.recorder = context.createScriptProcessor(BUFFER_SIZE, 1, 1);

        // specify the processing function
        global.recorder.onaudioprocess = e => {
          this.recorderProcess(e);
        };

        // connect stream to our recorder
        audioInput.connect(global.recorder);

        // connect our recorder to the previous destination
        global.recorder.connect(context.destination);
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
      this.stream = this.client.createStream({data: 'audio', channel: 'stevechannel_1239c'});
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
    global.recorder.disconnect(this.audioContext.destination);
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