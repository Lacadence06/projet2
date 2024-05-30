import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Form2Component} from "./form2/form2.component";

@Component({
  selector: 'app-soumis-info',
  standalone: true,
  imports: [],
  templateUrl: './soumis-info.component.html',
  styleUrl: './soumis-info.component.css'
})
export class SoumisInfoComponent {
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  main() {
    const initialState = {

      list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
      title: 'Modal with component'

    };
    this.bsModalRef = this.modalService.show(Form2Component,{initialState,class:'modal-xl'} );
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
