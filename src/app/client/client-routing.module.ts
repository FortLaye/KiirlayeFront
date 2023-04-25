import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/menu-principal/dashboard/dashboard.component';
import { EntreprisesComponent } from './components/menu-principal/entreprises/entreprises.component';
import { StructuresComponent } from './components/menu-principal/structures/structures.component';

const routes: Routes = [
  {path: '', component: AuthentificationComponent},
  {path: 'menus-principal', component: MenuPrincipalComponent, canActivate: [AuthGuard], children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'entreprises', component: EntreprisesComponent},
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
