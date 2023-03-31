import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith, tap } from 'rxjs';
import { AuthentificationService } from 'src/app/client/services/authentification.service';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit{

  loginForm!: FormGroup;
  preferenceLoginCtrl!: FormControl
  emailCtrl!: FormControl
  phoneCtrl!: FormControl
  numIpmCtrl!: FormControl

  showEmailField$!: Observable<boolean>
  showPhoneField$!: Observable<boolean>
  showNumIpmField$!: Observable<boolean>

  msgError!: string
  isError: boolean = false

  constructor(private authService: AuthentificationService, 
              private fb: FormBuilder,
              private router: Router){}

  ngOnInit(): void {
    this.initFormControls();
    this.initLoginForm();
    this.initFormObservable()
    
  }

  initFormObservable() {

    this.showEmailField$ = this.preferenceLoginCtrl.valueChanges.pipe(
      startWith(this.preferenceLoginCtrl.value),
      map(preference => preference === "email"),
      tap(showEmailCtrl => this.setEmailCtrlValidators(showEmailCtrl))
    )
    this.showPhoneField$ = this.preferenceLoginCtrl.valueChanges.pipe(
      startWith(this.preferenceLoginCtrl.value),
      map(preference => preference === "phone"),
      tap(showPhoneCtrl => this.setPhoneCtrlValidators(showPhoneCtrl))
    )
    this.showNumIpmField$ = this.preferenceLoginCtrl.valueChanges.pipe(
      startWith(this.preferenceLoginCtrl.value),
      map(preference => preference === "ipm"),
      tap(showNumIpmCtrl => this.setNumIpmCtrlValidators(showNumIpmCtrl))
    )
  }

  setEmailCtrlValidators(showEmailCtrl: boolean){
    if (showEmailCtrl) {
      this.emailCtrl.addValidators([Validators.required, Validators.email])
    } else {
      this.emailCtrl.clearValidators()
    }
    this.emailCtrl.updateValueAndValidity();
  }

  setPhoneCtrlValidators(showPhoneCtrl: boolean){
    if (showPhoneCtrl) {
      this.phoneCtrl.addValidators([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)])
    } else {
      this.phoneCtrl.clearValidators();
    }
    this.phoneCtrl.updateValueAndValidity();
  }

  setNumIpmCtrlValidators(showNumIpmCtrl: boolean){
    if (showNumIpmCtrl) {
      this.numIpmCtrl.addValidators([Validators.required, Validators.minLength(9), Validators.maxLength(9)])
    }else{
      this.numIpmCtrl.clearValidators();
    }
    this.numIpmCtrl.updateValueAndValidity();
  }

  private initFormControls(){
    this.preferenceLoginCtrl = this.fb.control('email');
    this.emailCtrl = this.fb.control('')
    this.phoneCtrl = this.fb.control('')
    this.numIpmCtrl = this.fb.control('')
  }

  private initLoginForm(){
    this.loginForm = this.fb.group({
      preference: this.preferenceLoginCtrl,
      email: this.emailCtrl,
      phone: this.phoneCtrl,
      numIpm: this.numIpmCtrl,
      password: ['', Validators.required]
    })
  }

  getFormCtrlEorrors(ctrl: AbstractControl){
      if (ctrl.hasError('required')) {
        return 'Ce champ est obligatoire !'
      } else if(ctrl.hasError('email')) {
        return 'Entrez une adresse mail valide !'
      }else if(ctrl.hasError('pattern')){
        return 'Entrez un numéro de téléphone valide !'
      } else {
        return 'Ce champ contient des erreurs !'
      }
  }

  login(){
    // this.authService.login(this.loginForm.value).subscribe()
    // console.log(this.loginForm.value);
    
    this.authService.login(this.loginForm.value).subscribe(
       () => {
          this.router.navigateByUrl('/client/menus-principal')
       },
       (error) => {
          this.msgError = error.error.message
          this.isError = true;
       }
    );
  }

}

