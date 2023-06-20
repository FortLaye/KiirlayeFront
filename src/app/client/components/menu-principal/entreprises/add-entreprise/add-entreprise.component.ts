import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EntreprisesService} from "../../../../services/entreprises.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit{

  coordonnees!: FormGroup
  responsable!: FormGroup
  contrat!: FormGroup

  coordonnees_step: boolean = false;
  responsable_step: boolean = false;
  contrat_step: boolean = false;
  step = 1
  currentItem = ''

  constructor(private formBuilder: FormBuilder, private entrepriseService:EntreprisesService, private router:Router) {
  }
  ngOnInit(): void {
    this.coordonnees = this.formBuilder.group({
      nomEntreprise:['', Validators.required],
      ninea:['', Validators.required],
      numRegCommerce:['', Validators.required],
      adresse:this.formBuilder.group({
        pays: ['',Validators.required],
        region: ['',Validators.required],
        ville: ['',Validators.required],
        departement: ['',Validators.required],
        rue_entrprise: ['',Validators.required]
      }),
      numeroTelephone:['', Validators.required],
      fax:['', Validators.required],
      emailEntreprise:['', [Validators.required,Validators.email]],
    })

    this.responsable = this.formBuilder.group({
      prenom:['',Validators.required],
      nom:['',Validators.required],
      telephone:['',Validators.required],
      fixe:[''],
      mail:[''],
      fonction:[''],
      copieCNI:[''],
      photoResponsable:['']

    })

    this.contrat = this.formBuilder.group({
      dateDeSignature:['',Validators.required],
      copieDucontrat:[''],
      dateDentreeEnVigueur:['',Validators.required],
      dateDeFin:['',Validators.required],
      periodiciteDeFacturation:['',Validators.required],
      typedoffre:['',Validators.required]
    })
  }

  addEntreprise(){
    const decodedToken: any = jwt_decode(localStorage.getItem('token')!)
    console.log(decodedToken.jti)
    console.log(this.coordonnees.value)
    if(this.coordonnees.valid){
    this.entrepriseService.postEntreprise(this.coordonnees.value,decodedToken.jti).subscribe(
      ()=>{
        this.router.navigateByUrl('/client/menus-principal/entreprises/list-entreprises')
      }
    )
    }
  }
  get coordonnees_details(){
    return this.coordonnees.controls;
  }
  get responsables_details(){
    return this.responsable.controls;
  }

  get contrats_details(){
    return this.contrat.controls;
  }

  next(){
    if (this.step === 1){
      this.coordonnees_step = true;
      if (this.coordonnees.invalid){return }
      this.step++
      return
    }

    if (this.step === 2){
      this.responsable_step = true;
      if (this.responsable.invalid){return}
        this.step++
    }
  }

  previous(){
    this.step--
    if (this.step == 1){
      this.coordonnees_step = false
    }
    if (this.step == 2){
      this.responsable_step = false;
    }
  }


  submit(){
    if (this.step === 3){
      this.contrat_step = true ;
      if(this.contrat.invalid){
        return
      }
    }
  }

}
