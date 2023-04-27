import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { OffreSliderComponent } from './components/authentification/offre-slider/offre-slider.component';
import { AuthFormComponent } from './components/authentification/auth-form/auth-form.component';
import { DashboardComponent } from './components/menu-principal/dashboard/dashboard.component';
import { EntreprisesComponent } from './components/menu-principal/entreprises/entreprises.component';
import { StructuresComponent } from './components/menu-principal/structures/structures.component';
import { CardDataComponent } from './components/menu-principal/dashboard/card-data/card-data.component';
import { EntreprisesGraphsComponent } from './components/menu-principal/dashboard/entreprises-graphs/entreprises-graphs.component';
import { StructuresGraphsComponent } from './components/menu-principal/dashboard/structures-graphs/structures-graphs.component';
import { AdherantsGraphsComponent } from './components/menu-principal/dashboard/adherants-graphs/adherants-graphs.component';


@NgModule({
  declarations: [
    AuthentificationComponent,
    OffreSliderComponent,
    MenuPrincipalComponent,
    AuthFormComponent,
    DashboardComponent,
    EntreprisesComponent,
    StructuresComponent,
    CardDataComponent,
    EntreprisesGraphsComponent,
    StructuresGraphsComponent,
    AdherantsGraphsComponent
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
