import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent  {
  title?: string;
  closeBtnName?: string;
  list: string[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
