import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {DemandeService} from "../../../../BAck-end/services/demande.service";
import {NgForOf, NgIf} from "@angular/common";
import {FiliereModel} from "../../../../BAck-end/model/filiere";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    MatStep,
    MatFormField,
    MatStepper,
    MatStepLabel,
    MatInput,
    MatButton,
    MatStepperNext,
    MatStepperPrevious,
    MatSelect,
    MatOption
  ],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component implements OnInit{
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  file!: File | null
  profileForm:any = FormGroup;
  filieres!: any[];
  //stepper declarations
  isLinear = false;
  firstFormGroup !: FormGroup;
  secondFormGroup!: FormGroup;
  user: any;



  constructor(public bsModalRef: BsModalRef,private fb: FormBuilder,private demandeService:DemandeService) {}
  // ngOnInit() {
  //   this.profileForm = this.fb.group({
  //     nom: ['', Validators.required],
  //     prenoms: ['', Validators.required],
  //     annaca: ['', Validators.required],
  //     filiere: ['', Validators.required],
  //     classe: ['', Validators.required],
  //     themesoutenance: ['', Validators.required]
  //   });



  ngOnInit() {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
    console.log(this.user)




    this.firstFormGroup = this.fb.group({
      contact: ['', Validators.required],
      adress: ['', Validators.required],
      annaca: ['', Validators.required],
      cla: ['', Validators.required],
      fil: ['', Validators.required],

    });
    this.secondFormGroup = this.fb.group({
      thème: ['', Validators.required],
      problé: ['', Validators.required],
      objectspé: ['', Validators.required],
      objectgé: ['', Validators.required],
      result: ['', Validators.required],
      env: ['', Validators.required],
      id_etud: [this.user?.idetudiant || '', Validators.required],
    });





      this.demandeService.getFilieres().subscribe(filieres => {
        this.filieres = filieres;
        console.log(this.filieres)
      });

  }

  onSubmit() {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      return;
    }

    let formData = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
    };

    // console.log(formData);
    // console.log(formData.filiere)
    console.log('Données de connexion envoyées:', formData); // Ajoutez ceci pour déboguer

    // const formData = new FormData();
    // Object.keys(this.profileForm.controls).forEach(key => {
    //   formData.append(key, this.profileForm.get(key).value);
    // });

    this.demandeService.submitDemande(formData).subscribe(
      (res:any) => {
        console.log('Success:', res);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

