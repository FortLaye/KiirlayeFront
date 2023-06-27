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
  currentPage:number=0
  pagesize = 5
  totalPages: number = 0
  constructor(private entrepriseService: EntreprisesService,
              private router: Router){}

  entreprises$!: Observable<Entreprise[]>;
  ngOnInit(): void {
    console.log(this.loader)
      this.entreprises$ = this.entrepriseService.getAllEntreprises()
      this.loader=false
    console.log(this.loader)
  }

  onEditEntreprise(id: number){
    this.router.navigateByUrl('/client/menus-principal/entreprises/'+id);
  }

  onShowEntreprise(id: number){
    this.router.navigateByUrl(`/client/menus-principal/entreprises/details-entreprise/${id}`);
  }


}
