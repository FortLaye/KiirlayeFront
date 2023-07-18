import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntreprisesService} from "../../../../services/entreprises.service";
import {AdherentsService} from "../../../../services/adherents.service";
import {Adherent} from "../../../../models/adherents";

@Component({
  selector: 'app-details-adherents',
  templateUrl: './details-adherents.component.html',
  styleUrls: ['./details-adherents.component.css']
})
export class DetailsAdherentsComponent implements OnInit{
  loader:boolean = true
  adherent!: Adherent
  ngOnInit(): void {
    this.onShowAdherent().subscribe(
      (value)=> {
        console.log(value)
        this.adherent = value
        this.loader = false
      }
    )
  }

  constructor(private route: ActivatedRoute,private adherentService:AdherentsService,private router:Router) {
  }


  onShowAdherent(){
    const id = +this.route.snapshot.params['id']
    return this.adherentService.getAdherentsById(id);
  }

  onEditAdherent(id: number) {
    this.router.navigateByUrl(`/client/menus-principal/adherents/${id}`)
  }
}
