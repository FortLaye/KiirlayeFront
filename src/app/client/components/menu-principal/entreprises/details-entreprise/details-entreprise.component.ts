import {Component, Input, OnInit} from '@angular/core';
import {Entreprise} from "../../../../models/entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntreprisesService} from "../../../../services/entreprises.service";
import {AdherentsService} from "../../../../services/adherents.service";
import {Adherent} from "../../../../models/adherents";

@Component({
  selector: 'app-details-entreprise',
  templateUrl: './details-entreprise.component.html',
  styleUrls: ['./details-entreprise.component.css']
})
export class DetailsEntrepriseComponent implements OnInit{
  @Input() entreprise! : Entreprise
  @Input() adherents!: Adherent[]
  loader : boolean = true
  firstName : any
  p:number = 1

  constructor(private route :ActivatedRoute, private entrepriseService:EntreprisesService, private adherentService:AdherentsService, private router:Router) {
  }
  ngOnInit(): void {
    const faceSnapId =+this.route.snapshot.params['id']
    this.entrepriseService.getEntreprise(faceSnapId).subscribe(
      (value)=>{
        this.entreprise = value

      }
    )

    this.adherentService.getAdherentByEntreprise(faceSnapId).subscribe(
      (value)=>{
        console.log(value)
        this.adherents = value
        this.loader = false
      }
    )
  }


  onShowDetailsAdherents(idAdherents:number) {
    this.router.navigateByUrl(`/client/menus-principal/adherents/details-adherent/${idAdherents}`)
  }

  search() {
    if (this.firstName == ""){
      this.loader = false
      this.ngOnInit()
      this.loader = true
    }else {
      this.adherents = this.adherents.filter(res =>{
        return res.prenom.toLowerCase().match(this.firstName.toLocaleLowerCase()) || res.nom.toLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  onEditEntreprise(id: number){
    this.router.navigateByUrl('/client/menus-principal/entreprises/'+id);
  }

  onShowContrat(id: number) {
    this.router.navigateByUrl('/client/menus-principal/entreprises/details-contract/'+id);
  }
}
