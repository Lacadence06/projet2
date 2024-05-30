import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Router, RouterLink, Routes} from "@angular/router";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
//import {AuthService} from "../../../BAck-end/services/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MatFormField,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInput
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
   // private authService: AuthService,
    private router: Router,
private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /*onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        response => {
          console.log('Connexion réussie');
          this.router.navigate(['/dashboard']).then(r => {}); // Redirigez vers la page d'accueil ou une autre page sécurisée
        },
        error => {
          console.error('Erreur de connexion', error);
        }
      )
    }
  }*/
  loginredirect(){
this.router.navigate(['dashboard'])
  };
}
