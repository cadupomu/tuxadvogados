import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environments";

import { TuxModule } from "./modules/tux.module";
import { HomeModule } from "./modules/home.module";

import { LoginModule } from "./modules/login.module";
import { CoreModule } from "./core/core.module";



@NgModule({
  declarations: [
    AppComponent,
       
  ],

  imports: [   
    
    AngularFireModule.initializeApp(environment.firebase),
    TuxModule,
    HomeModule,
    LoginModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
