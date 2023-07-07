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
import { SignedUserResolver } from './resolvers/signed-user.resolver';
import { ListEntreprisesComponent } from './components/menu-principal/entreprises/list-entreprises/list-entreprises.component';
import { ItemEntreprisesComponent } from './components/menu-principal/entreprises/item-entreprises/item-entreprises.component';
import { AddEntrepriseComponent } from './components/menu-principal/entreprises/add-entreprise/add-entreprise.component';
import { DetailsEntrepriseComponent } from './components/menu-principal/entreprises/details-entreprise/details-entreprise.component';
import { AdherentsComponent } from './components/menu-principal/adherents/adherents.component';
import { ListAdherentsComponent } from './components/menu-principal/adherents/list-adherents/list-adherents.component';
import {NgxPaginationModule} from "ngx-pagination";
import { DetailsAdherentsComponent } from './components/menu-principal/adherents/details-adherents/details-adherents.component';
import { AddAdherentsComponent } from './components/menu-principal/adherents/add-adherents/add-adherents.component';


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
    AdherantsGraphsComponent,
    ListEntreprisesComponent,
    ItemEntreprisesComponent,
    AddEntrepriseComponent,
    DetailsEntrepriseComponent,
    AdherentsComponent,
    ListAdherentsComponent,
    DetailsAdherentsComponent,
    AddAdherentsComponent,
  ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        SharedModule,
        NgxPaginationModule
    ],
  exports: [
    OffreSliderComponent,
    AuthFormComponent
  ],
  providers: [
    SignedUserResolver
  ]
})
export class ClientModule { }
