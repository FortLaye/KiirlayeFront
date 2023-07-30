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
    const Id =this.route.snapshot.params['id']
    this.entrepriseService.getEntreprise(Id).subscribe(
      (value)=>{
        this.entreprise = value

      }
    )

    this.adherentService.getAdherentByEntreprise(Id).subscribe(
      (value: any)=>{
        console.log(value.data)
        this.adherents = value.data
        this.loader = false
      }
    )
  }


  onShowDetailsAdherents(idAdherents:string) {
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

  onEditEntreprise(id: string){
    this.router.navigateByUrl('/client/menus-principal/entreprises/'+id);
  }

  onShowContrat(id: string) {
    this.router.navigateByUrl('/client/menus-principal/entreprises/details-contract/'+id);
  }
}
