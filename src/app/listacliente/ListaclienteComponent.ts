import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servico/firebase.service';


@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent implements OnInit{

  clientes = [];  

  constructor(private fs: FirebaseService){}
  
  ngOnInit(): void {
      this.fs.consultaDados().subscribe(caixinha => this.clientes = caixinha);
  }

}
