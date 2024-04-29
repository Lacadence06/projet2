import { Component } from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {Form5Component} from "./modal5/form5/form5.component";
import {FormModalComponent} from "../../direct-form/modal/form-modal/form-modal.component";

@Component({
  selector: 'app-serv-dev',
  standalone: true,
  imports: [],
  templateUrl: './serv-dev.component.html',
  styleUrl: './serv-dev.component.css'
})
export class ServDevComponent {
  bsModalRef?: BsModalRef;
  listeEncadreur : any = [
    {name: 'BADOUIN ANGE' },
    {name: 'KOFFI WILLIE' },
    {name: 'ETTIEN KEVIN' }
  ];
  constructor(private modalService: BsModalService) {}

  servdev() {
    const initialState = {
      list: [ 'Pass your data'],
      title: 'Demande de stage',
      listeEncadreur: this.listeEncadreur
    }
    this.bsModalRef = this.modalService.show(Form5Component, {initialState, class: 'modal-xl'});
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
