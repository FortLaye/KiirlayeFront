import {Component, Input, OnInit} from '@angular/core';
import {Entreprise} from "../../../../models/entreprise";
import {ActivatedRoute} from "@angular/router";
import {EntreprisesService} from "../../../../services/entreprises.service";

@Component({
  selector: 'app-details-entreprise',
  templateUrl: './details-entreprise.component.html',
  styleUrls: ['./details-entreprise.component.css']
})
export class DetailsEntrepriseComponent implements OnInit{
  @Input() entreprise! : Entreprise

  constructor(private route :ActivatedRoute, private entrepriseService:EntreprisesService) {
  }
  ngOnInit(): void {
    const faceSnapId =+this.route.snapshot.params['id']
    this.entrepriseService.getEntreprise(faceSnapId).subscribe(
      (value)=>{
        this.entreprise = value
      }
    )
  }


  protected readonly ondragenter = ondragenter;
}
