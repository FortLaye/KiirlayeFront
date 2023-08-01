import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntreprisesService} from "../../../../services/entreprises.service";
import {AdherentsService} from "../../../../services/adherents.service";
import {Adherent} from "../../../../models/adherents";
import {AyantDroitService} from "../../../../services/ayant-droit.service";
import {AyantDroit} from "../../../../models/ayantDroit";

@Component({
  selector: 'app-details-adherents',
  templateUrl: './details-adherents.component.html',
  styleUrls: ['./details-adherents.component.css']
})
export class DetailsAdherentsComponent implements OnInit{
  loader:boolean = true
  adherent!: Adherent
  ayantDroits!: AyantDroit
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.onShowAdherent().subscribe(
      (value)=> {
        console.log(value)
        this.adherent = value
        this.loader = false
      }
    )
    this.ayantdroit.getAyentDroitByAdherents(id).subscribe(
      value => {
        this.ayantDroits = value.data
      }
    )
  }

  constructor(private route: ActivatedRoute,private adherentService:AdherentsService,private router:Router, private ayantdroit:AyantDroitService) {
  }


  onShowAdherent(){
    const id = this.route.snapshot.params['id']
    return this.adherentService.getAdherentsById(id);
  }

  onEditAdherent(id: string) {
    this.router.navigateByUrl(`/client/menus-principal/adherents/${id}`)
  }
}
