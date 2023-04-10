import { NgModule } from "@angular/core";

import { HomeComponent } from "../home/home.component";
import { SharedModule } from "../shared/shared.module";
import { TuxModule } from "./tux.module";

@NgModule({
    declarations: [HomeComponent],
    
    imports: [
      
      SharedModule,
      TuxModule
    ]
  })
  export class HomeModule { }