var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 */
var Recorder = (function (_super) {
    __extends(Recorder, _super);
    /* @ngInject */
    function Recorder() {
        _super.call(this);
        this.recording = false;
        if (!global.navigator.mediaDevices) {
            console.log("getUserMedia() not supported.");
        }
    }
    Recorder.prototype.initialize = function () {
        var _this = this;
        return navigator.mediaDevices
            .getUserMedia({
            audio: true,
            video: false
        })
            .then(function (stream) {
            var context = _this.audioContext;
            var audioInput = context.createMediaStreamSource(stream);
            // create a javascript node
            global.recorder = context.createScriptProcessor(BUFFER_SIZE, 1, 1);
            // specify the processing function
            global.recorder.onaudioprocess = function (e) {
                _this.recorderProcess(e);
            };
            // connect stream to our recorder
            audioInput.connect(global.recorder);
            // connect our recorder to the previous destination
            global.recorder.connect(context.destination);
            return _this;
        })
            .catch(function (err) {
            console.log("The following error occurred: " + err.name);
        });
    };
    /**
     * Start recording.
     */
    Recorder.prototype.start = function () {
        if (this.recording === false) {
            console.log('>>> Start Recording');
            //open binary stream
            // TODO: Pass in subscribed channel information into createStream for meta
            this.stream = this.client.createStream({ data: 'audio', channel: 'stevechannel_1239c' });
            this.recording = true;
        }
    };
    /**
     * Stops and disconnects
     */
    Recorder.prototype.stop = function () {
        if (this.recording === true) {
            console.log('Stopping recording');
            this.recording = false;
            //close binary stream
            this.stream.end();
        }
        global.recorder.disconnect(this.audioContext.destination);
    };
    /**
     *
     * @param e
     */
    Recorder.prototype.recorderProcess = function (e) {
        if (this.recording === true) {
            this.stream.write(e.inputBuffer.getChannelData(0));
        }
    };
    return Recorder;
}(AudioBase));
//# sourceMappingURL=Recorder.js.map