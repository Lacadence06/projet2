import { Routes } from '@angular/router';
import {AuthLayoutsComponent} from "./Front-end/Layouts/auth-layouts/auth-layouts.component";
import {LoginComponent} from "./Front-end/Auth/login/login.component";
import {DashboardLayoutsComponent} from "./Front-end/Layouts/dashboard-layouts/dashboard-layouts.component";
import {DashboardComponent} from "./Front-end/Pages/dashboard/dashboard.component";
import {SoumisInfoComponent} from "./Front-end/Pages/soumis-info/soumis-info.component";

export const routes: Routes = [
  {path:'',
    component:AuthLayoutsComponent,
  children:[
    {path:'',redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent}
  ]
  },
  {path:'',
  component:DashboardLayoutsComponent,
  children:[
    {path: 'dashboard',component:DashboardComponent},
    {path: 'soumis',component: SoumisInfoComponent},
  ]
  }
];
