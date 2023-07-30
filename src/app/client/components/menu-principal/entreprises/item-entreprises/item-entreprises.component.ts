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
  loader : boolean = true
  loader1! :boolean


  constructor(private formBuilder:FormBuilder, private entrepriseService: EntreprisesService, private route : ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.entrepriseService.getEntreprise(id).subscribe(
      (value)=>{
        this.entreprise = value
        console.log(this.entreprise)
        this.coordonneesEntreprise = this.formBuilder.group({
          nomEntreprise:[this.entreprise.nomEntreprise, Validators.required],
          ninea:[this.entreprise.ninea, Validators.required],
          numRegCommerce:[this.entreprise.numRegistreDeComerce, Validators.required],
          adresse:this.formBuilder.group({
            // pays: [this.entreprise.adresse.pays,Validators.required],
            // region: [this.entreprise.adresse.region,Validators.required],
            // ville: [this.entreprise.adresse.ville,Validators.required],
            // departement: [this.entreprise.adresse.departement,Validators.required],
            // rue_entrprise: [this.entreprise.adresse.rue_entrprise,Validators.required]
          }),
          numeroTelephone:[this.entreprise.numeroTelephone, Validators.required],
          fax:[this.entreprise.fax, Validators.required],
          emailEntreprise:[this.entreprise.email, [Validators.required,Validators.email]],
        })
        this.loader = false
      }
    )

  }

  updateEntreprise() {
    const idEntreprise = +this.route.snapshot.params['id']
    const decodeToken:any = jwt_decode(localStorage.getItem('token')!)
    if (this.coordonneesEntreprise.valid){
      this.loader1 = true
    this.entrepriseService.putEntreprise(this.coordonneesEntreprise.value,idEntreprise,decodeToken.jti).subscribe(
      ()=>{
        console.log(idEntreprise)
        console.log(decodeToken.jti)
        console.log(this.coordonneesEntreprise.value)
        this.loader1 = false
        this.router.navigateByUrl('/client/menus-principal/entreprises/list-entreprises')

      }
    )
    }
  }
}
