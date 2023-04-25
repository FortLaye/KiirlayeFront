import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/client/services/authentification.service';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit{

  loginForm!: FormGroup;
  loginCtrl!: FormControl

  msgError!: string
  isError: boolean = false

  constructor(private authService: AuthentificationService, 
              private fb: FormBuilder,
              private router: Router){}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.loginForm = this.fb.group({
      login: ['', Validators.required, Validators.minLength(9)],
      password: ['', Validators.required]
    })
  }

  getFormCtrlEorrors(ctrl: AbstractControl){
      if (ctrl.hasError('required')) {
        return 'Ce champ est obligatoire !'
      } else if(ctrl.hasError('minLength')){
        return 'Vous devez entrer minimum 9 caractères !'
      } else {
        return 'Ce champ contient des erreurs !'
      }
  }

   login(){
      this.authService.login(this.loginForm.value).subscribe(
        () => {
            this.router.navigateByUrl('/client/menus-principal/dashboard')
        },
        (error) => {
            this.msgError = error.error.message
            this.isError = true;
        }
      );
    }

}

 