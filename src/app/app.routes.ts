import { Routes } from '@angular/router';
import { ServDevComponent } from './Front-end/Pages/serv-dev/serv-dev.component';
import {LoginComponent} from "./Front-end/Auth/login/login.component";
import { Form5Component } from './Front-end/Pages/serv-dev/modal5/form5/form5.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent },
 
  {path:'projetweb',
  component:ServDevComponent,
  children:[
    {
      path:'',
      redirectTo:'/projetweb/form5',
      pathMatch:'full',
    },
 
  ]}

];
