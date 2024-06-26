import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';


import {routes} from './app.routes';
import {BsModalService} from "ngx-bootstrap/modal";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {HttpClient, HttpHandler, provideHttpClient} from "@angular/common/http";
import {provideToastr} from "ngx-toastr";
import {provideAnimations} from "@angular/platform-browser/animations";
import {MatStepperIntl} from "@angular/material/stepper";
import {NgxPermissionsModule, NgxPermissionsService, NgxPermissionsStore} from "ngx-permissions";


let MyIntl;
export const appConfig: ApplicationConfig = {

  providers: [
    NgxPermissionsService,
    NgxPermissionsModule,
    NgxPermissionsStore,
    provideRouter(routes),
    HttpClient, BsModalService,
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideToastr(),
    provideAnimations(),
    {provide:MatStepperIntl,useClass:MyIntl},

    ]

};
