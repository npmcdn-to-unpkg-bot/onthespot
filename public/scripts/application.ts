import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import HomeComponent from 'app/home/home.component';

bootstrap(HomeComponent, [HTTP_PROVIDERS]);