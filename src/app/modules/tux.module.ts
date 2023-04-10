import { NgModule } from "@angular/core";

import { FotoComponent } from "../foto/foto.component";
import { FormupdateComponent } from "../formupdate/formupdate.component";

import { ClienteformComponent } from "../clienteform/clienteform.component";
import { ListaclienteComponent } from "../listacliente/ListaclienteComponent";

import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        FotoComponent,
        FormupdateComponent,
        ClienteformComponent,
        ListaclienteComponent
    ],

    imports: [SharedModule],
    exports: [FotoComponent]
})

export class TuxModule{

}