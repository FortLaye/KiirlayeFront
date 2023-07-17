import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contrat} from "../models/contrat";
import {environment} from "../../../environments/environment.development";
import {Entreprise} from "../models/entreprise";

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private httpClient:HttpClient) { }

  getAllContract() {
    return this.httpClient.get<Contrat[]>(`${environment.apiUrl}/entreprises/contrats`)
  }

  getContractById(id:number) {
    return this.httpClient.get<Contrat>(`${environment.apiUrl}/entreprises/contrats/${id}`)
  }

  putContract(id: number, contrat:Contrat) {
    return this.httpClient.put<Contrat>(`${environment.apiUrl}/entreprises/contrats/${id}`,contrat)
  }
}
