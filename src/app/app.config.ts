import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';


import {routes} from './app.routes';
import {BsModalService} from "ngx-bootstrap/modal";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {HttpClient, HttpHandler, provideHttpClient} from "@angular/common/http";


export const appConfig: ApplicationConfig = {


  providers: [
    provideRouter(routes),
    HttpClient, BsModalService,
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
};
