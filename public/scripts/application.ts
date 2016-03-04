import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import HomeComponent from 'app/home/home.component';
import AuthComponent from 'app/auth/auth.component';

bootstrap(AuthComponent, [HTTP_PROVIDERS]);