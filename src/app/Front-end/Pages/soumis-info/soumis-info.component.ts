import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Form2Component} from "./form2/form2.component";
import {DemandeService} from "../../../BAck-end/services/demande.service";
import {NgForOf} from "@angular/common";
import {FormComponent} from "../total/form/form.component";
//import {FormdetailsComponent} from "./formdetails/formdetails.component";

@Component({
  selector: 'app-soumis-info',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './soumis-info.component.html',
  styleUrl: './soumis-info.component.css'
})
export class SoumisInfoComponent implements OnInit{
  bsModalRef?: BsModalRef;
  use: any;

  constructor(private modalService: BsModalService,private demandeService: DemandeService) {}
  demandeid: any[] = [];

  ngOnInit(): void {
    // @ts-ignore
    // const user = JSON.parse(localStorage.getItem('user'));
    // console.log();
    // const studentId :number  = user.idetudiant; // Assurez-vous que l'objet user contient l'ID de l'étudiant
    // console.log(studentId)
    // this.getDemandesByStudentId(studentId);

    const userData = localStorage.getItem('user');
    this.use = userData ? JSON.parse(userData) : null;
    console.log(this.use?.idetudiant)
    this.getDemandesByStudentId()
  }

  ///  get all demande pour un etudiant  by id
  getDemandesByStudentId(): void {

      const formdata = {
        "idetudiant": this.use.idetudiant
      };
      console.log(formdata)
      this.demandeService.getalldemandebyid(formdata).subscribe(
        (data) => {
          this.demandeid = data.demandesid;
        },
        (error) => {
          console.error('Erreur lors de la récupération des demandes', error);
        }
      );
    }

//  fin get all demande
//affichage des information de get all demande by id dans le modal
  main() {
    const initialState = {

      list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
      title: 'Modal with component',


    };
    this.bsModalRef = this.modalService.show(Form2Component,{initialState,class:'modal-xl'} );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  /// affiche les données dans le modal
  // Affidetailsid(demandeid:any) {
  //   const initialState = {
  //
  //     list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
  //     title: 'Details de la demande',
  //     demandebyid : demandeid
  //
  //   };
  //   this.bsModalRef = this.modalService.show(FormdetailsComponent,{initialState,class:'modal-xl'} );
  //   this.bsModalRef.content.closeBtnName = 'Close';
  // }




}
