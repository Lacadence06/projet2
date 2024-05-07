import { Component } from '@angular/core';
import {Router, RouterLink, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private router:Router) {
}
  LoginRedirect() {
  this.router.navigate(["serv-dev"])
  }
}
