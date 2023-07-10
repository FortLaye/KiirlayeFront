import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdherentsService} from "../../../../services/adherents.service";
import {EntreprisesService} from "../../../../services/entreprises.service";
import {Entreprise} from "../../../../models/entreprise";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Adherent} from "../../../../models/adherents";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-edit-adherents',
  templateUrl: './edit-adherents.component.html',
  styleUrls: ['./edit-adherents.component.css']
})
export class EditAdherentsComponent implements OnInit{
  loader: boolean = true;
  entreprises!: Entreprise[];
  adherentsForm!: FormGroup;
  adherent!:Adherent

  onSave() {
    this.loader = true
    console.log(this.adherentsForm.value)
    this.adherent = this.adherentsForm.value
    const jwtDecode:any = jwt_decode(localStorage.getItem('token')!)
    const idAdherent = +this.route.snapshot.params['id']
    this.adherentService.putAdherent(this.adherent,idAdherent,jwtDecode.jti).subscribe(
      ()=>{
        this.router.navigateByUrl('/client/menus-principal/adherents/list-adherents')

      }
    )
  }
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private adherentService:AdherentsService,
              private entrepriseService:EntreprisesService,
              private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.entrepriseService.getAllEntreprises().subscribe(
      (value)=> {
        this.entreprises = value
        this.loader = false
      }
    )
    this.adherentService.getAdherentsById(+this.route.snapshot.params['id']).subscribe(
      value => {
        this.adherent = value
        this.adherentsForm = this.formBuilder.group({
          userIdd:[this.adherent.userIdd, Validators.required],
          prenom:[this.adherent.prenom, Validators.required],
          nom:[this.adherent.nom, Validators.required],
          email:[this.adherent.email, Validators.required],
          tel:[this.adherent.tel, Validators.required],
          adresse:[this.adherent.adresse, Validators.required],
          genre:[this.adherent.genre, Validators.required],
          lieuNaiss:[this.adherent.lieuNaiss, Validators.required],
          entrepriseClients:[this.adherent.entrepriseClients.id, Validators.required]
        })
      }
    )
  }
}
