import { Component } from '@angular/core';


@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent {

  clientes = [
    {
      title: "Nayeon",
      age: "26",
      situacao: "Cliente VIP",
      img: "https://portalpopline.com.br/wp-content/uploads/2022/05/FTDRc6UWAAAt7c2.jpg"
    }
  ];

}
