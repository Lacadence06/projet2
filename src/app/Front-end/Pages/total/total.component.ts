import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService, ModalModule, ModalOptions} from "ngx-bootstrap/modal";
import {FormComponent} from "./form/form.component";
import {GetalletudiantService} from "../../../BAck-end/services/getalletudiant.service";
import {GetallencadreurService} from "../../../BAck-end/services/getallencadreur.service";
import {NgForOf, NgIf} from "@angular/common";
import {DemandeService} from "../../../BAck-end/services/demande.service";


@Component({
  selector: 'app-total',
  standalone: true,
  imports: [ModalModule, NgIf, NgForOf],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent implements OnInit{
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService,private demandeService: DemandeService) {}

  demande: any[] = [];




  ngOnInit(): void {
    this.demandeService.getalldemande().subscribe(data => {
      // @ts-ignore
      this.demande = data.demande;
      // @ts-ignore
      console.log(this.demande.demande)
    });


  }



  Affidetails(demande:any) {
     const initialState = {

         list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
         title: 'Details de la demande',
       demande : demande

    };
    this.bsModalRef = this.modalService.show(FormComponent,{initialState,class:'modal-xl'} );
    this.bsModalRef.content.closeBtnName = 'Close';
   }



}
