import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "../header/header.component";
import { AppRoutingModule } from "../app-routing.module";

import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";


@NgModule({
  
    declarations: [ HeaderComponent], 
    imports: [
      CommonModule,
      AppRoutingModule
    ],
  
    exports: [
      AngularFirestoreModule,
      AngularFireAuthModule,
      AppRoutingModule,
      HeaderComponent,
      CommonModule,
    ]
  })
  export class CoreModule { }