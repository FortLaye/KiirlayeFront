import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoggedUser, User } from '../models/user';
import { AuthentificationService } from '../services/authentification.service';
import jwt_decode from 'jwt-decode';

@Injectable()
export class SignedUserResolver implements Resolve<User> {

  constructor(private auth: AuthentificationService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const decodedToken: any = jwt_decode(localStorage.getItem('token')!);
    return this.auth.getUserConnected(decodedToken.jti);
  }

}
