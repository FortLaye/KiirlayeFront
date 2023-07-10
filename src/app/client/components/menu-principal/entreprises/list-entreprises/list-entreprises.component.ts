import {Component, OnInit} from '@angular/core';
import {EntreprisesService} from "../../../../services/entreprises.service";
import {Observable, of} from "rxjs";
import {Entreprise} from "../../../../models/entreprise";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-entreprises',
  templateUrl: './list-entreprises.component.html',
  styleUrls: ['./list-entreprises.component.css']
})
export class ListEntreprisesComponent implements OnInit{
  loader = true
  firstName : any
  p:number = 1

  constructor(private entrepriseService: EntreprisesService,
              private router: Router){}

  entreprises!: Entreprise[];
  ngOnInit(): void {
    console.log(this.loader)
      this.entrepriseService.getAllEntreprises().subscribe(
        value => {
          this.entreprises = value
          this.loader=false
        }
      )

    console.log(this.loader)
  }

  onEditEntreprise(id: number){
    this.router.navigateByUrl('/client/menus-principal/entreprises/'+id);
  }

  onShowEntreprise(id: number){
    this.router.navigateByUrl(`/client/menus-principal/entreprises/details-entreprise/${id}`);
  }


  search() {
    if (this.firstName == ""){
      this.loader = false
      this.ngOnInit()
      this.loader = true
    }else {
      this.entreprises = this.entreprises.filter(res =>{
        return res.nomEntreprise.toLowerCase().match(this.firstName.toLocaleLowerCase()) || res.emailEntreprise.toLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }


}
