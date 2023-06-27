import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {adherent} from "../models/adherents";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AdherentsService{

  constructor(private httpClient:HttpClient) {
  }

  getAllAdherents():Observable<adherent[]>{
    return this.httpClient.get<adherent[]>(`${environment.apiUrl}/users/adherents`)
  }

}
