import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthentificationService } from '../../services/authentification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit{

    constructor(private auth: AuthentificationService,
                private route: Router){}

    ngOnInit(): void {
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
