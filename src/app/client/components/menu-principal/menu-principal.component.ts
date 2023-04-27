import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit{

    constructor(private auth: AuthentificationService,
                private route: Router){}
    user!: User | null

    ngOnInit(): void {
        const decodedToken: any = jwt_decode(localStorage.getItem('token')!);
        this.auth.getUserConnected(decodedToken.jti).subscribe(
            value => {
                this.user = value;
            }
        )
        $(function() {
            $("li").click(function(e) {
                e.preventDefault();
                $("li").removeClass("active");
                $(this).addClass("active");
            });
        });
    }

    logout(){
        this.auth.logOut();
        this.route.navigateByUrl('/client/login');
    }

}
