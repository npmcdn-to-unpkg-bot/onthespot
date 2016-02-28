// Shoutouts to
// http://www.jingpingji.com/blog/2015/8/4/transferring-sound-data-with-binaryjs-and-buffering-for-smooth-playbac
/**
 * Main service class.
 */
var ChatService = (function () {
    /* @ngInject */
    function ChatService($window, $log) {
        this.$log = $log;
        this.$window = $window;
    }
    ChatService.prototype.getRecorder = function () {
        return new Recorder();
    };
    ChatService.prototype.getPlayback = function () {
        return new Playback();
    };
    return ChatService;
}());
//# sourceMappingURL=chat.service.js.map