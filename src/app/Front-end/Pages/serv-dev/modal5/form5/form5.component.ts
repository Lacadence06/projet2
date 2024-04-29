import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-form5',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './form5.component.html',
  styleUrl: './form5.component.css'
})
export class Form5Component {
  title?: string;
  closeBtnName?: string;
  listeEncadreur: any[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {

  }
}
