import {Component, OnInit} from '@angular/core';
import {EntreprisesService} from "../../../../services/entreprises.service";

@Component({
  selector: 'app-list-entreprises',
  templateUrl: './list-entreprises.component.html',
  styleUrls: ['./list-entreprises.component.css']
})
export class ListEntreprisesComponent implements OnInit{
  constructor(private entrepriseService: EntreprisesService){}
  ngOnInit(): void {
      this.entrepriseService.getAllEntreprises().subscribe(
        value => {
          console.log(value)
        }
      )
  }

}
