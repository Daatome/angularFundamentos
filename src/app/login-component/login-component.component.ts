import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  ngOnInit(): void{
    const firebaseConfig = {
      apiKey: "AIzaSyA28qVtILyA8pQjnvtUuNlZxzKF5IKcOfM",
      authDomain: "testingangular-dgam.firebaseapp.com",
      databaseURL: "https://testingangular-dgam-default-rtdb.firebaseio.com",
      projectId: "testingangular-dgam",
      storageBucket: "testingangular-dgam.appspot.com",
      messagingSenderId: "289393652096",
      appId: "1:289393652096:web:66caec236f89f944fc9165",
      measurementId: "G-TXE9C4TBFR"
    };
    const app = initializeApp(firebaseConfig);
  }


  constructor(private loginService: LoginService){

  }
  
  login(form:NgForm){
    const email= form.value.email;
    const password= form.value.password;
    this.loginService.login(email, password);
  }
}
