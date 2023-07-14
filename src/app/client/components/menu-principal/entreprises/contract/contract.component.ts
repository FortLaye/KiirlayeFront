import {Component, OnInit} from '@angular/core';
import {ContratService} from "../../../../services/contrat.service";
import {Contrat} from "../../../../models/contrat";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit{
  contrat!: Contrat[]
  loader = true
  firstName : any
  p:number = 1

  ngOnInit() {
    this.contratService.getAllContract().subscribe(
      value => {
        console.log(value)
        this.contrat = value
        this.loader = false
      }
    )
  }


  constructor(private contratService:ContratService, private router: Router) {
  }

  onShowContract(id: number) {
    this.router.navigateByUrl('/client/menus-principal/entreprises/details-contract/'+id)
  }

  search() {
    if (this.firstName == ""){
      this.loader = false
      this.ngOnInit()
      this.loader = true
    }else {
      this.contrat = this.contrat.filter(res =>{
        return res.entrepriseClients.nomEntreprise.toLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }
}
