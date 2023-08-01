import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class StructureSanitaireService {

  constructor(private httpClient :HttpClient) { }

  getStructureSanitaire(){
    return this.httpClient.get<any>(`${environment.backUrl}/structureSanitaires`)
  }
}
