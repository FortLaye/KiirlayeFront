import {Component, OnInit} from '@angular/core';
import {EntreprisesService} from "../../../../services/entreprises.service";
import {AdherentsService} from "../../../../services/adherents.service";
import {Entreprise} from "../../../../models/entreprise";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-adherents',
  templateUrl: './add-adherents.component.html',
  styleUrls: ['./add-adherents.component.css']
})
export class AddAdherentsComponent implements OnInit{
  entreprises$! : Entreprise[]
  loader : boolean = true
  adherentsForm!: FormGroup
  ngOnInit(): void {
    this.entrepriserService.getAllEntreprises().subscribe(
      (value)=> {
        this.entreprises$ = value
        this.loader = false
      }
    )
    this.adherentsForm = this.formBuilder.group({
      userIdd:['', Validators.required],
      prenom:['', Validators.required],
      nom:['', Validators.required],
      email:['', Validators.required],
      tel:['', Validators.required],
      adresse:['', Validators.required],
      genre:['', Validators.required],
      lieuNaiss:['', Validators.required],
      entrepriseClients:['', Validators.required]
    })

  }

  constructor(private entrepriserService:EntreprisesService,
              private adherentService:AdherentsService,
              private formBuilder:FormBuilder,
              private router : Router) {
  }
  onSave(){
    console.log(this.adherentsForm.value)
  }
}
