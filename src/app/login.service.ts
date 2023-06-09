import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private router:Router) { 

  }

  

  token:string;
  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      Response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token;
            this.router.navigate(['/']);
          }
        )
      }
    )
  }

  getIdToken(){
    return this.token;
  }
}
