import {Component} from 'angular2/core';
import Recorder from 'app/media/Recorder';
import Playback from 'app/media/Playback';

@Component({
  selector: 'home',
  template: `Hello, {{ name }}`,
  providers: [Recorder, Playback]
})
class HomeComponent {
  name:string;

  constructor(private recorder:Recorder, playback: Playback) {
    this.name = 'Steve';

    recorder.initialize().then(instance => {
      instance.start();
      setTimeout(() => {
        instance.stop();
      }, 5000)
    });
  }
}

export default HomeComponent