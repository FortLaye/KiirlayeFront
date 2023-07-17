import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContratService} from "../../../../services/contrat.service";
import {Contrat} from "../../../../models/contrat";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {each} from "chart.js/helpers";

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit{
  contract!:Contrat
  contractForm! : FormGroup
  loader : Boolean = true
  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.contratService.getContractById(id).subscribe(
      value => {
        this.contract = value
        console.log(value)
        this.contractForm = this.formBuilder.group({
          dateDeSignature:[this.contract.date_signature, Validators.required],
          dateDentreeenVigueur:[this.contract.date_entree_vigueur, Validators.required],
          dateDefinDecontrat:[this.contract.date_fin_contrat, Validators.required],
          PeriodiciteiDucontrat:[this.contract.periodicite_contrat, Validators.required],

        })
        this.loader = false;
      }

    )
  }

  constructor(private router:Router, private route:ActivatedRoute, private contratService:ContratService, private formBuilder:FormBuilder) {
  }


  updateContract() {

  }

  protected readonly each = each;
}
