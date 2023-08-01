import {Component, OnInit} from '@angular/core';
import {AdherentsService} from "../../../../services/adherents.service";
import {Adherent} from "../../../../models/adherents";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-adherents',
  templateUrl: './list-adherents.component.html',
  styleUrls: ['./list-adherents.component.css']
})
export class ListAdherentsComponent implements OnInit{
  adherents!:Adherent[]
  loader = true
  firstName : any
  p:number = 1
  ngOnInit(): void {
    this.adherentService.getAllAdherents().subscribe(
      (value:any)=>{
        console.log(value.data)
        this.adherents = value.data
        this.loader = false
      },error => {
        console.log(error)
        alert(error)
        this.loader = false
      }
    )
  }
  constructor(private adherentService:AdherentsService, private router:Router) {

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

  onShowDetailsAdherents(idAdherents:number) {
    this.router.navigateByUrl(`/client/menus-principal/adherents/details-adherent/${idAdherents}`)
  }

  onEditAdherent(id: number) {
    this.router.navigateByUrl(`/client/menus-principal/adherents/${id}`)
  }
}
