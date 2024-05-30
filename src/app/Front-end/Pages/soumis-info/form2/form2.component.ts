import { Component } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  title?: string;
  closeBtnName?: string;
  list: string[] = [];

  constructor(public bsModalRef: BsModalRef) {}
  profileForm = new FormGroup({
    nom: new FormControl(''),
    prenoms: new FormControl(''),
    annaca:new FormControl(''),
    filiere: new FormControl(''),
    niveau:new FormControl('')

  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
