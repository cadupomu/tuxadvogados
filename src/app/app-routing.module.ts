import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteformComponent } from './clienteform/clienteform.component';
import { HomeComponent } from './home/home.component';
import { ListaclienteComponent } from './listacliente/ListaclienteComponent';
import { LoginComponent } from './login/login.component';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { RouterGuard } from './guardrouters/router.guard';
import { LoginGuard } from './guardrouters/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [RouterGuard] },
  {path: 'lista', component: ListaclienteComponent, canActivate: [RouterGuard]},
  {path: 'form', component: ClienteformComponent, canActivate: [RouterGuard]},
  {path: '', component: LoginComponent, canActivate: [LoginGuard]},

  {path: 'update/:id', component: FormupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
