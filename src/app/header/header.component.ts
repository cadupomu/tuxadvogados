import { Component } from '@angular/core';
import { AutenticarService } from '../servico/autenticar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  header = false
  constructor(
    private autenticar: AutenticarService,
    private router: Router
  ){

    this.autenticar.detalhesUser().onAuthStateChanged(user => {
      if(user){
        this.header = true;
      }
    })

  }

    //delogar
    deslogar(){
      this.autenticar.logout();
      this.header = !this.header
  
    }


}
