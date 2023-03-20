import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteformComponent } from './clienteform/clienteform.component';
import { HomeComponent } from './home/home.component';
import { ListaclienteComponent } from './listacliente/ListaclienteComponent';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ListaclienteComponent},
  { path: 'form', component: ClienteformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
