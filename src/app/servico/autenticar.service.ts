import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private AngularFireAuth: AngularFireAuth) {}


  autenticarUser(user){
    return this.AngularFireAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  cadastrarUser(user){
    return this.AngularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.AngularFireAuth.signOut();
  }

  detalhesUser(){
    return this.AngularFireAuth
  }

}