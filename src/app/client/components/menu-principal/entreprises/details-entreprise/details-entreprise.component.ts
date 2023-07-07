import {Component, Input, OnInit} from '@angular/core';
import {Entreprise} from "../../../../models/entreprise";
import {ActivatedRoute} from "@angular/router";
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
  @Input() adherent!: Adherent
  loader : boolean = true

  constructor(private route :ActivatedRoute, private entrepriseService:EntreprisesService, private adherentService:AdherentsService) {
  }
  ngOnInit(): void {
    const faceSnapId =+this.route.snapshot.params['id']
    this.entrepriseService.getEntreprise(faceSnapId).subscribe(
      (value)=>{
        this.entreprise = value
        this.loader = false
      }
    )

    this.adherentService.getAdherentByEntreprise(faceSnapId).subscribe(
      (value)=>{
        console.log(value)
        this.adherent = value
      }
    )
  }


  protected readonly ondragenter = ondragenter;
}
