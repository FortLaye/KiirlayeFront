import {Component, OnInit} from '@angular/core';
import {EntreprisesService} from "../../../../services/entreprises.service";
import {AdherentsService} from "../../../../services/adherents.service";
import {Entreprise} from "../../../../models/entreprise";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Adherent} from "../../../../models/adherents";
import Swal from 'sweetalert2'
import jwt_decode from "jwt-decode";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-add-adherents',
  templateUrl: './add-adherents.component.html',
  styleUrls: ['./add-adherents.component.css']
})
export class AddAdherentsComponent implements OnInit{
  entreprises! : Entreprise[]
  loader : boolean = true
  adherentsForm!: FormGroup
  adherent!: Adherent
  ngOnInit(): void {
    this.entrepriserService.getAllEntreprises().subscribe(
      (value:any)=> {
        this.entreprises = value.data
        this.loader = false
      }
    )
    this.adherentsForm = this.formBuilder.group({
      ridca:['', Validators.required],
      prenom:['', Validators.required],
      nom:['', Validators.required],
      emailPro:['', Validators.required],
      telephonePro:['', Validators.required],
      sexe:['MASCULIN', Validators.required],
      lieuNais:['', Validators.required],
      poste:['', Validators.required],
      categorie:['B1', Validators.required],
      DateEmbauche:['', Validators.required],
      numCNI:['', Validators.required],
      nbreEnfant:['', Validators.required],
      dateNais:['', Validators.required],
      sitMatrimoniale:['MARIE', Validators.required],
      nbreEpouse:['', Validators.required],
    })

  }

  constructor(private entrepriserService:EntreprisesService,
              private adherentService:AdherentsService,
              private formBuilder:FormBuilder,
              private router : Router) {
  }
  onSave(){
    // if (this.adherentsForm.valid){
    //   this.adherent = this.adherentsForm.value
    //   console.log(this.adherent)
    //   const decodeToken: any = jwt_decode(localStorage.getItem('token')!)
    //   const idAgent = decodeToken.jti
    //   this.adherentService.postAdherents(this.adherent, idAgent).subscribe(
    //     ()=>{
    //       this.router.navigateByUrl('/client/menus-principal/adherents/list-adherents')
    //     }
    //   )
    //
    // }

    if(this.adherentsForm.valid){
      this.adherent = this.adherentsForm.value
      console.log(this.adherent)
      this.adherentService.postAdherent(this.adherentsForm.value).subscribe(
        ()=>{
          Swal.fire({
            title: `Ajouter avec Success`,
            text: `${this.adherent.prenom} avec le Matricule ${this.adherent.ridca}`,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/client/menus-principal/adherents/list-adherents')

        },error=>{
          alert(error)
        }
      )

    }
    console.log(this.adherentsForm.value)



  }
}
