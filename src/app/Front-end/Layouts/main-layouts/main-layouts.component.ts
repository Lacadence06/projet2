import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-layouts',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './main-layouts.component.html',
  styleUrl: './main-layouts.component.css'
})
export class MainLayoutsComponent {

}
