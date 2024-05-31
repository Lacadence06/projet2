import { Routes } from '@angular/router';
import {LoginComponent} from "./Front-end/Auth/login/login.component";
import {DashboardComponent} from "./Front-end/Pages/dashboard/dashboard.component";
import {SoumisInfoComponent} from "./Front-end/Pages/soumis-info/soumis-info.component";
import {MainLayoutsComponent} from "./Front-end/Layouts/main-layouts/main-layouts.component";
import {ListeDemandeComponent} from "./Front-end/Pages/liste-demande/liste-demande.component";


export const routes: Routes = [
  {path:'',
    component:LoginComponent,
  children:[
    {path:'',redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent}
  ]
  },
  {path:'',
  component:MainLayoutsComponent,
  children:[
    {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'depot',component: SoumisInfoComponent},
    {path: 'lst',component: ListeDemandeComponent}

  ]
  }
];
