import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContratService} from "../../../../services/contrat.service";
import {Contrat} from "../../../../models/contrat";

@Component({
  selector: 'app-details-contract',
  templateUrl: './details-contract.component.html',
  styleUrls: ['./details-contract.component.css']
})
export class DetailsContractComponent implements OnInit{
  contrat! :Contrat

  ngOnInit() {
    this.contratService.getContractById(+this.route.snapshot.params['id']).subscribe(
      value => {
        console.log(value)
        this.contrat= value
      }
    )
  }

  constructor(private router:Router, private route:ActivatedRoute, private contratService:ContratService) {
  }

}
