import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FotoComponent } from './foto/foto.component';
import { ClienteformComponent } from './clienteform/clienteform.component';
import { ListaclienteComponent } from './listacliente/ListaclienteComponent';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteformComponent,
    ListaclienteComponent,
    HomeComponent,
    HeaderComponent,
    FotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
