import {Component, OnInit} from '@angular/core';
import {GetallencadreurService} from "../../../BAck-end/services/getallencadreur.service";
import {NgForOf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-encadreur',
  standalone: true,
  imports: [
    NgForOf,
    IonicModule

  ],
  templateUrl: './encadreur.component.html',
  styleUrl: './encadreur.component.css'
})
export class EncadreurComponent implements OnInit{

  encadreurs: any[] = [];

  constructor(private getallencadreurService: GetallencadreurService) { }

  ngOnInit(): void {
    this.getallencadreurService.getAllencadreur().subscribe(data => {
      this.encadreurs = data.encadreur;
      console.log(this.encadreurs)
    });
  }



}
