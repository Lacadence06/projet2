import { Component } from '@angular/core';
import {Router, RouterLink, Routes} from "@angular/router";
import { UserService } from '../../../services/user.service';
import { OnInit } from '@angular/core';
import {FormBuilder,FormArray,FormGroup,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any = FormGroup;
  responseMessage:any;
  show:Boolean = false;
  formBuilder: any;


constructor(private router:Router,
private UserService:UserService) {}

ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username:[null,[Validators.required,Validators.required]],
    password: [null,Validators.required]
  })
}
    
  LoginRedirect() {
    
    var formData = this.loginForm.value;
    var data = {
      username: formData.username,
      password: formData.password
    }
       
    this.UserService.Login(data).subscribe({
      next: (response: any) => {
        if(response.status==200){
          this.show = false;
          this.router.navigate(['dashboard']);
        }else{
          this.show = true;
        }
      },
     
    });
    
  
  }
}