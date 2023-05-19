import {Component, OnInit} from '@angular/core';
import {EntreprisesService} from "../../../../services/entreprises.service";
import {Observable} from "rxjs";
import {Entreprise} from "../../../../models/entreprise";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-entreprises',
  templateUrl: './list-entreprises.component.html',
  styleUrls: ['./list-entreprises.component.css']
})
export class ListEntreprisesComponent implements OnInit{
  constructor(private entrepriseService: EntreprisesService,
              private router: Router){}

  entreprises$!: Observable<Entreprise[]>;
  ngOnInit(): void {
      this.entreprises$ = this.entrepriseService.getAllEntreprises()
  }

  onShowEntreprise(id: number){
    this.router.navigateByUrl('/client/menus-principal/entreprises/'+id);
  }

}
