import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Adherent, dataOfAdherents} from "../models/adherents";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AdherentsService{

  constructor(private httpClient:HttpClient) {
  }

  //return la liste de tous les adherents

  getAllAdherents():Observable<dataOfAdherents>{
    return this.httpClient.get<dataOfAdherents>(`${environment.backUrl}/adherents`)
  }

  getAdherentByEntreprise(id: string):Observable<Adherent[]>{
    return this.httpClient.get<Adherent[]>(`${environment.backUrl}/adherents/entrepriseClient/${id}`)
  }

  getAdherentsById(idAdherents: number) {
    return this.httpClient.get<Adherent>(`${environment.backUrl}/adherents/${idAdherents}`)
  }

  postAdherents(adherents: Adherent, idAgent:number) {
    return this.httpClient.post<Adherent>(`${environment.apiUrl}/users/adherents/agent/${idAgent}/add`, adherents)
  }

  putAdherent(adherents:Adherent,idAdherent: number, idAgent: number) {
    return this.httpClient.put<Adherent>(`${environment.apiUrl}/users/adherents/${idAdherent}/agent/${idAgent}/update`,adherents)
  }
}
