import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EntreprisesService } from '../services/entreprises.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseResolver implements Resolve<any[]> {

  constructor(private entrepriseService: EntreprisesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.entrepriseService.getAllEntreprises();
  }

}
