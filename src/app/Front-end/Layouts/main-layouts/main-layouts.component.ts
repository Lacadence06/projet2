import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {UserService} from "../../../BAck-end/services/user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main-layouts',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgIf
  ],
  templateUrl: './main-layouts.component.html',
  styleUrl: './main-layouts.component.css'
})
export class MainLayoutsComponent implements OnInit{
  showLogoutButton: boolean = false;
  constructor(  private UserService:UserService,) {
  }
  user: any;

  ngOnInit() {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
      console.log('Données de l\'utilisateur récupérées:', this.user); // Affichez les données pour vérifier
    }
  }
  toggleLogoutButton() {
    this.showLogoutButton = !this.showLogoutButton;
  }

  logout() {
    this.UserService.logout(); // Appel de la méthode logout du service AuthService
  }



}
