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
          date_signature:[this.contract.date_signature, Validators.required],
          date_entree_vigueur:[this.contract.date_entree_vigueur, Validators.required],
          date_fin_contrat:[this.contract.date_fin_contrat, Validators.required],
          periodicite_contrat:[this.contract.periodicite_contrat, Validators.required],
          entrepriseClients:[this.contract.entrepriseClients.codeEntreprise, Validators.required],

        })
        this.loader = false;
      }

    )
  }

  constructor(private router:Router, private route:ActivatedRoute, private contratService:ContratService, private formBuilder:FormBuilder) {
  }


  updateContract() {
    if (this.contractForm.valid){
      console.log(this.contract)
      this.contratService.putContract(this.contract.id, this.contract).subscribe(
        value => {
          console.log(value)
          this.router.navigateByUrl(`/client/menus-principal/entreprises/details-contract/${this.contract.id}`)
        }
      )
    }
  }


  redirectDetailsContract(id: number) {
    this.router.navigateByUrl(`/client/menus-principal/entreprises/details-contract/${id}`)
  }
}
