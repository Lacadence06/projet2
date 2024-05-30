import { Routes } from '@angular/router';
import {AuthLayoutsComponent} from "./Front-end/Layouts/auth-layouts/auth-layouts.component";
import {LoginComponent} from "./Front-end/Auth/login/login.component";
import {DashboardComponent} from "./Front-end/Pages/dashboard/dashboard.component";
import {SoumisInfoComponent} from "./Front-end/Pages/soumis-info/soumis-info.component";
import {MainLayoutsComponent} from "./Front-end/Layouts/main-layouts/main-layouts.component";
import {EncadreurComponent} from "./Front-end/Pages/encadreur/encadreur.component";
import {EtudiantComponent} from "./Front-end/Pages/etudiant/etudiant.component";
import {TotalComponent} from "./Front-end/Pages/total/total.component";
//import {AuthGuard} from "./BAck-end/auth.guard";


export const routes: Routes = [
  {path:'',
    component:AuthLayoutsComponent,
  children:[
    {path:'',redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent}
  ]
  },
  {path:'',
  component:MainLayoutsComponent,
  children:[
    {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
    {path: 'dashboard',component:DashboardComponent,},
    {path: 'depot',component: SoumisInfoComponent},
    {path: 'cadre',component: EncadreurComponent},
    {path: 'student',component: EtudiantComponent},
    {path:'toto',component:TotalComponent}


  ]
  }
];
