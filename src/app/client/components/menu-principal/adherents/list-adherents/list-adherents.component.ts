import {Component, OnInit} from '@angular/core';
import {AdherentsService} from "../../../../services/adherents.service";
import {adherent} from "../../../../models/adherents";

@Component({
  selector: 'app-list-adherents',
  templateUrl: './list-adherents.component.html',
  styleUrls: ['./list-adherents.component.css']
})
export class ListAdherentsComponent implements OnInit{
  adherents!:adherent[]
  loader = true
  firstName : any
  p:number = 1
  ngOnInit(): void {
    this.adherentService.getAllAdherents().subscribe(
      (value)=>{
        this.adherents = value
        console.log(this.adherents)
        this.loader = false
      }
    )
  }
  constructor(private adherentService:AdherentsService) {

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
}
