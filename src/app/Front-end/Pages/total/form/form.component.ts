import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {NgForOf, NgIf} from "@angular/common";
import {DemandeService} from "../../../../BAck-end/services/demande.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  demande : any
  constructor(public bsModalRef: BsModalRef, private demandeService: DemandeService) {}

  ngOnInit(): void {
    console.log(this.demande)
  }

}
