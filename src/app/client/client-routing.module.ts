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

const routes: Routes = [
  {path: '', component: AuthentificationComponent},
  {path: 'menus-principal', component: MenuPrincipalComponent, canActivate: [AuthGuard], resolve: {user: SignedUserResolver}, children: [
    {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'entreprises-graphs', component: EntreprisesGraphsComponent},
      {path: 'structures-graphs', component: StructuresGraphsComponent},
      {path: 'adherants-graphs', component: AdherantsGraphsComponent}
    ]},
    {path: 'entreprises', component: EntreprisesComponent , children: [
        {path: 'list-entreprises', component: ListEntreprisesComponent},
      ] },
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

