import {Component, OnInit} from '@angular/core';
import {EntreprisesService} from "../../../../services/entreprises.service";
import {AdherentsService} from "../../../../services/adherents.service";
import {Entreprise} from "../../../../models/entreprise";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Adherent} from "../../../../models/adherents";
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
      (value)=> {
        this.entreprises = value
        this.loader = false
      }
    )
    this.adherentsForm = this.formBuilder.group({
      userIdd:['', Validators.required],
      prenom:['', Validators.required],
      nom:['', Validators.required],
      email:['', Validators.required],
      tel:['', Validators.required],
      adresse:['', Validators.required],
      genre:['Masculin', Validators.required],
      lieuNaiss:['', Validators.required],
      entrepriseClients:['', Validators.required]
    })

  }

  constructor(private entrepriserService:EntreprisesService,
              private adherentService:AdherentsService,
              private formBuilder:FormBuilder,
              private router : Router) {
  }
  onSave(){
    if (this.adherentsForm.valid){
      this.adherent = this.adherentsForm.value
      console.log(this.adherent)
      const decodeToken: any = jwt_decode(localStorage.getItem('token')!)
      const idAgent = decodeToken.jti
      this.adherentService.postAdherents(this.adherent, idAgent).subscribe(
        ()=>{
          this.router.navigateByUrl('/client/menus-principal/adherents/list-adherents')
        }
      )

    }


  }
}
