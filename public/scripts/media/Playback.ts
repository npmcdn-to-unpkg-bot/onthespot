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
  }

  /**
   * Handles the incoming stream data.
   */
  onStream() {
    console.log('>>> Receiving Audio Stream');
    this.time = 0;
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
      ((this.init === false) && (this.audioCache.length > 5))) {
      this.init = true;
      this.playCache(this.audioCache);
    }
  }
