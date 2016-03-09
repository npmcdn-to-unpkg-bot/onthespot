import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import OnTheSpot from 'app/base/onthespot.component';

bootstrap(OnTheSpot, [HTTP_PROVIDERS]);