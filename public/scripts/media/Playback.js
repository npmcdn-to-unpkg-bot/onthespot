var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Class handling audio playback.
 */
var Playback = (function (_super) {
    __extends(Playback, _super);
    function Playback() {
        var _this = this;
        _super.call(this);
        this.nextTime = 0;
        this.init = false;
        this.audioCache = [];
        this.client.on('stream', function (stream) {
            _this.onStream();
            stream.on('data', function (data) {
                _this.handleDataStream(data);
            });
            stream.on('end', function () {
                _this.offStream();
            });
        });
    }
    /**
     * Plays the current cache.
     */
    Playback.prototype.playCache = function (cache) {
        if (!cache || !cache.length) {
            console.log('No cache or cache length = 0', cache);
            this.stop();
        }
        var source, delay = this.audioContext.createDelay(1);
        while (cache.length) {
            source = this.audioContext.createBufferSource();
            source.connect(delay);
            source.buffer = cache.shift();
            source.connect(this.audioContext.destination);
            source.start(0);
        }
    };
    /**
     * Handles the incoming stream data.
     */
    Playback.prototype.onStream = function () {
        console.log('>>> Receiving Audio Stream');
        this.time = 0;
        this.init = false;
        this.audioCache = [];
    };
    /**
     * Standin function for handling end of stream.
     */
    Playback.prototype.offStream = function () {
        console.log('||| End of Audio Stream');
    };
    Playback.prototype.handleDataStream = function (data) {
        var array = new Float32Array(data);
        var buffer = this.audioContext.createBuffer(1, 2048, 44100);
        buffer.copyToChannel(array, 0);
        this.audioCache.push(buffer);
        // make sure we put at least 5 chunks in the buffer before starting
        if ((this.init === true) ||
            ((this.init === false) && (this.audioCache.length > 5))) {
            this.init = true;
            this.playCache(this.audioCache);
        }
    };
    return Playback;
}(AudioBase));
//# sourceMappingURL=Playback.js.map