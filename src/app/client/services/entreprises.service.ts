import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../models/entreprise';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private http: HttpClient) { }

  getAllEntreprises():Observable<Entreprise[]>{
    return this.http.get<Entreprise[]>(`${environment.testUrl}/entreprises`)
  }


}
