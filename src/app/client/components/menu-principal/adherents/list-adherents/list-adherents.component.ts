import {Component, OnInit} from '@angular/core';
import {AdherentsService} from "../../../../services/adherents.service";
import {adherent} from "../../../../models/adherents";

@Component({
  selector: 'app-list-adherents',
  templateUrl: './list-adherents.component.html',
  styleUrls: ['./list-adherents.component.css']
})
export class ListAdherentsComponent implements OnInit{
  adherent!:adherent[]
  loader = true
  ngOnInit(): void {
    this.adherentService.getAllAdherents().subscribe(
      (value)=>{
        this.adherent = value
        console.log(this.adherent)
        this.loader = false
      }
    )
  }
  constructor(private adherentService:AdherentsService) {

  }


}
