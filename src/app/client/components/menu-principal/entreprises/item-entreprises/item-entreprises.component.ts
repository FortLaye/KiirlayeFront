import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntreprisesService} from "../../../../services/entreprises.service";
import {ActivatedRoute, Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {Entreprise} from "../../../../models/entreprise";

@Component({
  selector: 'app-item-entreprises',
  templateUrl: './item-entreprises.component.html',
  styleUrls: ['./item-entreprises.component.css']
})
export class ItemEntreprisesComponent implements OnInit{
  @Input() entreprise! : Entreprise
  coordonneesEntreprise!: FormGroup


  constructor(private formBuilder:FormBuilder, private entrepriseService: EntreprisesService, private route : ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.entrepriseService.getEntreprise(id).subscribe(
      (value)=>{
        this.entreprise = value
        console.log(this.entreprise)
      }

    ).unsubscribe()
    this.coordonneesEntreprise = this.formBuilder.group({
      nomEntreprise:[this.entreprise.nomEntreprise, Validators.required],
      ninea:[this.entreprise.ninea, Validators.required],
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
  }

  updateEntreprise() {
    const id = +this.route.snapshot.params['id']
    const decodeToken:any = jwt_decode(localStorage.getItem('token')!)
    if (this.coordonneesEntreprise.valid)
    this.entrepriseService.putEntreprise(this.coordonneesEntreprise.value,id,decodeToken.jti)
  }
}
