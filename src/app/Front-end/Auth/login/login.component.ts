import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {Router, RouterLink, Routes} from "@angular/router";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder, FormGroup, ReactiveFormsModule,FormsModule, Validators} from "@angular/forms";
//import {UserService} from "../../../BAck-end/services/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatInput} from "@angular/material/input";
import {UserService} from "../../../BAck-end/services/user.service";
import {NgIf} from "@angular/common";
import { ToastrService} from "ngx-toastr";


export class Login {
  username!: string;
  password!:string;
  constructor() {
    this.username="";
    this.password="";
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MatFormField,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInput,
    NgIf,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  loginForm:any = FormGroup;
  responseMessage:any;
  show:Boolean = false;



  constructor(private router:Router,
              private UserService:UserService,
              private formBuilder: FormBuilder,
              private toast: ToastrService
              ) {}

  ngOnInit(): void {
    //   const data = localStorage.getItem('user');
    // if(data!.length){
    //   this.router.navigateByUrl('dashboard')
    //
    // }
    
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password: ['',Validators.required]
    })
    const data = localStorage.getItem('user');
     if(data!.length){
    this.router.navigateByUrl('dashboard')}


  }

  LoginRedirect() {
    let formData = this.loginForm.value;
    let data = {
      username: formData.username,
      password: formData.password
    }
    console.log('Données de connexion envoyées:', data); // Ajoutez ceci pour déboguer

    this.UserService.Login(data).subscribe({
      next: (res: any) => {
        console.log('Réponse reçue:', res);
        if (res.user) {
          localStorage.setItem('user', JSON.stringify(res.user)); // Stockez les données de l'utilisateur
          console.log('Données de l\'utilisateur stockées:', res.user); // Affichez les données dans la console pour vérifier
        }
       this.router.navigateByUrl('dashboard')
      },
      error: (error) => {
        console.error('Mot de pas ou username incorrect:', error); // Ajoutez ceci pour voir l'erreur


      }

    });




  }
  logout() {
    this.UserService.logout();
  }


}

/**
 * constructor(
 *   private formBuilder: FormBuilder,
 *   private router: Router,
 *   private userService: UserService,
 *   private toast: ToastrService,
 * ){}
 * ngOnInit(): void {
 *   this.loginForm = this.formBuilder.group({
 *     username: ['', Validators.required],
 *     password: ['', Validators.required]
 *   });}
 *
 *
 *
 *   LoginRedirect()
 *   {
 *     let formData = this.loginForm.value;
 *     let data = {
 *       username: formData.username,
 *       password: formData.password
 *     };
 *
 *     console.log('Données de connexion envoyées:', data); // Ajoutez ceci pour déboguer
 *
 *     this.userService.Login(data).subscribe({
 *       next: (res: any) => {
 *         console.log('Réponse reçue:', res);
 *         if (res.status === 200) {
 *           this.show = false;
 *           this.router.navigate(['dashboard']);
 *         } else {
 *           this.show = true;
 *         }
 *       },
 *       error: (error) => {
 *         console.error('Mot de pas ou username incorrect:', error); // Ajoutez ceci pour voir l'erreur
 *         this.show = true;
 *       }
 *     })
 *   }
 */
