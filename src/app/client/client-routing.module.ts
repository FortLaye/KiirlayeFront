import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';

const routes: Routes = [
  {path: '', component: AuthentificationComponent},
  {path: 'menus-principal', component: MenuPrincipalComponent},
  {path: 'login', component: AuthentificationComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }
