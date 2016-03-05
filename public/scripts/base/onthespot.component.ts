import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@Component({
  selector: 'on-the-spot',
  templateUrl: 'scripts/base/onthespot.html',
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/', name: 'Home', component: OnTheSpot, useAsDefault: true}
])
class OnTheSpot {
  constructor() {

  }
}
export default OnTheSpot;