import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/menu-principal/dashboard/dashboard.component';
import { EntreprisesComponent } from './components/menu-principal/entreprises/entreprises.component';
import { StructuresComponent } from './components/menu-principal/structures/structures.component';
import { EntreprisesGraphsComponent } from './components/menu-principal/dashboard/entreprises-graphs/entreprises-graphs.component';
import { StructuresGraphsComponent } from './components/menu-principal/dashboard/structures-graphs/structures-graphs.component';
import { AdherantsGraphsComponent } from './components/menu-principal/dashboard/adherants-graphs/adherants-graphs.component';
import { SignedUserResolver } from './resolvers/signed-user.resolver';
import { EntrepriseResolver } from './resolvers/entreprise.resolver';
import { ListEntreprisesComponent } from "./components/menu-principal/entreprises/list-entreprises/list-entreprises.component";
import {
  ItemEntreprisesComponent
} from "./components/menu-principal/entreprises/item-entreprises/item-entreprises.component";
import {AddEntrepriseComponent} from "./components/menu-principal/entreprises/add-entreprise/add-entreprise.component";
import {
  DetailsEntrepriseComponent
} from "./components/menu-principal/entreprises/details-entreprise/details-entreprise.component";
import {AdherentsComponent} from "./components/menu-principal/adherents/adherents.component";
import {ListAdherentsComponent} from "./components/menu-principal/adherents/list-adherents/list-adherents.component";
import {
  DetailsAdherentsComponent
} from "./components/menu-principal/adherents/details-adherents/details-adherents.component";
import {AddAdherentsComponent} from "./components/menu-principal/adherents/add-adherents/add-adherents.component";
import {EditAdherentsComponent} from "./components/menu-principal/adherents/edit-adherents/edit-adherents.component";
import {ContractComponent} from "./components/menu-principal/entreprises/contract/contract.component";
import {
  DetailsContractComponent
} from "./components/menu-principal/entreprises/details-contract/details-contract.component";
import {EditContractComponent} from "./components/menu-principal/entreprises/edit-contract/edit-contract.component";


const routes: Routes = [
  {path: '', component: AuthentificationComponent},
  {path: 'menus-principal', component: MenuPrincipalComponent, /*canActivate: [AuthGuard],*/ children: [
    {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'entreprises-graphs', component: EntreprisesGraphsComponent},
      {path: 'structures-graphs', component: StructuresGraphsComponent},
      {path: 'adherants-graphs', component: AdherantsGraphsComponent}
    ]},
    {path: 'entreprises', component: EntreprisesComponent , children: [
        {path: 'list-entreprises', component: ListEntreprisesComponent},
        {path:'add-entreprises', component: AddEntrepriseComponent},
        {path: 'contract', component: ContractComponent},
        {path: ':id', component: ItemEntreprisesComponent},
        {path: 'details-entreprise/:id',component: DetailsEntrepriseComponent},
        {path: 'details-contract/:id', component: DetailsContractComponent},
        {path: 'edit-contract/:id', component: EditContractComponent}


      ] },
      {path:'adherents', component:AdherentsComponent, children:[
          {path: 'list-adherents', component: ListAdherentsComponent},
          {path: 'details-adherent/:id', component: DetailsAdherentsComponent},
          {path: 'add-adherent', component: AddAdherentsComponent},
           {path: ':id', component: EditAdherentsComponent}
        ]
      },
    {path: 'structures', component: StructuresComponent}
  ]},
  {path: 'login', component: AuthentificationComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }

