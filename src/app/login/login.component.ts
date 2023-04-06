import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/servico/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nameButtonForm = "Logar";
  nameButtonCadastrar = "Não possui conta? Clique aqui";
  titulo = "Login";

  alterar(){
    if(this.titulo == "Login"){
      this.titulo = "Cadastra-se";
      this.nameButtonForm = "Cadastrar";
      this.nameButtonCadastrar = "Autenticar";
    } else {
      this.titulo = "Login";
      this.nameButtonForm = "Logar";
      this.nameButtonCadastrar = "Não possui conta? Clique aqui";
    }
  }

  deslogar(){
    this.autenticarService.logout();
    this.router.navigate(['']);
  }

  formulario!: FormGroup

  constructor(private formBuilder : FormBuilder, private autenticarService : AutenticarService, private router : Router){}

  ngOnInit(): void {
    this.createForm();
  }
  
  createForm(){
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  formAuth(){
    if(this.nameButtonForm == "Logar"){
      this.autenticarService.autenticarUser(this.formulario.value)
      this.router.navigate(['/home'])
    } else if (this.nameButtonForm == "Cadastrar"){
      alert("Usuario cadastrado")
      this.autenticarService.cadastrarUser(this.formulario.value)
      this.router.navigate(['/'])
    } else {
      alert("Nenhuma opção")
    }
  }
}