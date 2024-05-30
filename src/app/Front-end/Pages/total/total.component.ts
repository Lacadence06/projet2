import { Component } from '@angular/core';
import {BsModalRef, BsModalService, ModalModule, ModalOptions} from "ngx-bootstrap/modal";
import {FormComponent} from "./form/form.component";


@Component({
  selector: 'app-total',
  standalone: true,
  imports: [ModalModule],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  details() {
    const initialState = {

        list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
        title: 'Modal with component'

    };
    this.bsModalRef = this.modalService.show(FormComponent,{initialState,class:'modal-xl'} );
    this.bsModalRef.content.closeBtnName = 'Close';
  }



}
