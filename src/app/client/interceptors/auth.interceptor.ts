import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthentificationService } from "../services/authentification.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

	constructor(private auth: AuthentificationService){}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const headers = new HttpHeaders().append('Authorization', `Bearer ${this.auth.tokenValue}`);

		const modifiedReq = req.clone({ headers });
		return next.handle(modifiedReq);
	}

}
