import { Routes } from '@angular/router';
import {LoginComponent} from "./Front-end/Auth/login/login.component";

export const routes: Routes = [
  {path:'',
    component:LoginComponent,
  children:[
    {path:'',redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent}
  ]
  },
  
];
