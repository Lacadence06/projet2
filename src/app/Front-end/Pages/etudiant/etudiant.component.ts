import {Component, OnInit} from '@angular/core';
import {GetalletudiantService} from "../../../BAck-end/services/getalletudiant.service";
import {NgForOf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [
    NgForOf,
    IonicModule
  ],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit{
  etudiants: any[] = [];

  constructor(private getalletudiantService: GetalletudiantService) { }

  ngOnInit(): void {
    this.getalletudiantService.getAllEtudiants().subscribe(data => {
      this.etudiants = data.etudiant;
    });
  }

}
