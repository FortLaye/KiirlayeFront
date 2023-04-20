import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, pipe } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoggedUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private tokenSubject!: BehaviorSubject<string | null>;
  public token!: Observable<string | null>;

  constructor(private http: HttpClient) { 
    this.tokenSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('token')!));
    this.token = this.tokenSubject.asObservable();
  }

  // login(userAuth: LoggedUser):Observable<any>{
  //     return this.http.post<any>(environment.apiUrl+"/security/login", userAuth).pipe(
  //       map(res => {
  //         localStorage.setItem('token', JSON.stringify(res.token))
  //         this.tokenSubject.next(res.token)
  //         return res
  //       })
  //     )
  // }

  login(userAuth: LoggedUser):Observable<any>{
    return this.http.post<any>(environment.apiUrl+"/security/login", userAuth);
  }

  public get tokenValue(){
    return this.tokenSubject.value
  }

  public get isConnected(){
    return (this.tokenSubject.value !== null) ? true : false
  }
  
  logOut(){
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }

  getUserConnected(idUser: number):Observable<User>{
    return this.http.get<User>(environment.apiUrl+`/adherants/${idUser}`)
  }
}


