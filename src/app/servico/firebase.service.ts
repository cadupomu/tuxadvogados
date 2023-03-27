import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class FirebaseService implements OnInit{

    colector: AngularFirestoreCollection;

    constructor(private af: AngularFirestore){
        this.colector = this.af.collection('fotos');
    }

    ngOnInit(): void {
        
    }

    consultaDados(){
        return this.colector.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                })
            })
        )
    }

    cadastrarDados(dados: any){
        console.log(dados);
        return this.colector.add(dados);
    }

    editaDados(id: any, dados: any){
        return this.colector.doc(id).update(dados);
    }

    excluirDados(id: any){
        return this.colector.doc(id).delete();
    }
}