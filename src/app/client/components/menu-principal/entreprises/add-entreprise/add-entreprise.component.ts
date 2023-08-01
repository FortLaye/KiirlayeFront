import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EntreprisesService} from "../../../../services/entreprises.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {Entreprise} from "../../../../models/entreprise";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit{

  entrepriseForm!: FormGroup
  entreprise!:Entreprise

  constructor(private formBuilder: FormBuilder, private entrepriseService:EntreprisesService, private router:Router) {
  }
  ngOnInit(): void {
    // this.entrepriseForm = this.formBuilder.group({
    //   nomEntreprise:['', Validators.required],
    //   ninea:['', Validators.required],
    //   numRegCommerce:['', Validators.required],
    //   adresse:this.formBuilder.group({
    //     pays: ['',Validators.required],
    //     region: ['',Validators.required],
    //     ville: ['',Validators.required],
    //     departement: ['',Validators.required],
    //     rue_entrprise: ['',Validators.required]
    //   }),
    //   numeroTelephone:['', Validators.required],
    //   fax:['', Validators.required],
    //   emailEntreprise:['', [Validators.required,Validators.email]],
    // })

    this.entrepriseForm = this.formBuilder.group({
      nomEntreprise:['', Validators.required],
      codeEntreprise:['',Validators.required],
      numRegistreDeComerce:['',Validators.required],
      numeroTelephone:['',Validators.required],
      email:['',Validators.required],
      fax:['',Validators.required],
      ninea:['',Validators.required],
    })


  }

  addEntreprise(){
    // const decodedToken: any = jwt_decode(localStorage.getItem('token')!)
    // console.log(decodedToken.jti)
    // console.log(this.entrepriseForm.value)
    // if(this.entrepriseForm.valid){
    // this.entrepriseService.postEntreprise(this.entrepriseForm.value,decodedToken.jti).subscribe(
    //   ()=>{
    //     this.router.navigateByUrl('/client/menus-principal/entreprises/list-entreprises')
    //   }
    // )
    // }
    if(this.entrepriseForm.valid){
      this.entreprise = this.entrepriseForm.value
      this.entrepriseService.postEntreprises(this.entreprise).subscribe(
        ()=>{

          Swal.fire({
            title: `Ajouter avec Success`,
            text: `${this.entreprise.nomEntreprise} avec le code ${this.entreprise.codeEntreprise}`,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })

          this.router.navigateByUrl('/client/menus-principal/entreprises/list-entreprises')
        },err => {
          alert(err)
        }
      )
    }
    console.log(this.entrepriseForm.value)
  }

}
