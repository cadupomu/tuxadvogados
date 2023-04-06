import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-clienteform',
  templateUrl: './clienteform.component.html',
  styleUrls: ['./clienteform.component.css']
})
export class ClienteformComponent implements OnInit{

  formDataDriven!: FormGroup;

  constructor(
    private tux: FormBuilder, 
    private fs: FirebaseService
    ){}

  ngOnInit(): void {      
  
        this.validaForm();
  }
  
  validaForm(){
    this.formDataDriven = this.tux.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      img: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      situacao: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  
  cadastrar(){

    try {
      this.fs.cadastrarDados(this.formDataDriven.value);
    }catch(err) {
      console.log(err);
    }
    
   }

}
