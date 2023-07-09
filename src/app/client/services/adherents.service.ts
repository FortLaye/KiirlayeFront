import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Adherent} from "../models/adherents";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AdherentsService{

  constructor(private httpClient:HttpClient) {
  }

  getAllAdherents():Observable<Adherent[]>{
    return this.httpClient.get<Adherent[]>(`${environment.apiUrl}/users/adherents`)
  }

  getAdherentByEntreprise(id: number):Observable<Adherent[]>{
    return this.httpClient.get<Adherent[]>(`${environment.apiUrl}/users/adherents/entClient/${id}`)
  }

  getAdherentsById(idAdherents: number) {
    return this.httpClient.get<Adherent>(`${environment.apiUrl}/users/adherents/${idAdherents}`)
  }

  postAdherents(adherents: Adherent, idAgent:number) {
    return this.httpClient.post(`${environment.apiUrl}/users/adherents/agent/${idAgent}/add`, adherents)
  }
}
