import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticarService } from '../servico/autenticar.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {  

  constructor(
    private autenticar: AutenticarService,
    private routerControl: Router
    ){}

  
  canActivate(): Promise<boolean>{ 
    return new Promise( results => {
      this.autenticar.detalhesUser().onAuthStateChanged(user => {
        if(!user) this.routerControl.navigate(['']);
        results(user ? true: false)
      });
    })
   }
  
}
