import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthentificationService } from '../../services/authentification.service';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit{

    constructor(private auth: AuthentificationService,
                private route: Router,
                private activeRoute: ActivatedRoute){}
                
    user!: User | null

    ngOnInit(): void {
        this.activeRoute.data.subscribe(
            value => {
                this.user = value['user']
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
