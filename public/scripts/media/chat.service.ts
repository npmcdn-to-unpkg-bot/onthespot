import {Injectable} from 'angular2/di';
import Recorder from './Recorder';
import Playback from './Playback';

@Injectable()
class ChatService {

  getRecorder() {
    return new Recorder();
  }

  getPlayback() {
    return new Playback();
  }
}
export default ChatService