import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AyantDroitService {

  constructor(private httpClient :HttpClient) { }

  private getAyentDroitByAdherents(id:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.backUrl}/ayantDroits/adherent/${id}`)
  }
}
