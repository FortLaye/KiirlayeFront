import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Entreprise} from '../models/entreprise';
import { environment } from 'src/environments/environment.development';
import {Adherent} from "../models/adherents";

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {
  entreprises!:Array<Entreprise>
  constructor(private http: HttpClient) { }

  getAllEntreprises():Observable<Entreprise[]>{
    return this.http.get<Entreprise[]>(`${environment.backUrl}/entrepriseClients`)
  }



  postEntreprise(entreprise:Entreprise, id:number){
    return this.http.post<Entreprise>(`${environment.apiUrl}/entreprises/agent/${id}/add`,entreprise)
  }

  getEntreprise(id: string) {
    return this.http.get<Entreprise>(`${environment.backUrl}/entrepriseClients/${id}`)
  }

  getAdherents(){
    return this.http.get<Adherent>(`${environment.apiUrl}/user/adherents`)
  }

  putEntreprise(entreprise:Entreprise, id :number, agentId:number){
    return this.http.put<Entreprise>(`${environment.apiUrl}/entreprises/${id}/agent/${agentId}/update`,entreprise)
  }
}
