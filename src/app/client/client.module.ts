import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { OffreSliderComponent } from './components/authentification/offre-slider/offre-slider.component';
import { AuthFormComponent } from './components/authentification/auth-form/auth-form.component';


@NgModule({
  declarations: [
    AuthentificationComponent,
    OffreSliderComponent,
    MenuPrincipalComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  exports: [
    OffreSliderComponent,
    AuthFormComponent
  ]
})
export class ClientModule { }
