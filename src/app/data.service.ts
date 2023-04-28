import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login.service';

//colocamos esto para que el servicio sea injectable
@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inyectamos el servicio de httpclient
  constructor( private httpClient:HttpClient , private loginService: LoginService) { }

  cargarEmpleados(){
    const token= this.loginService.getIdToken();
    return this.httpClient.get('https://testingangular-dgam-default-rtdb.firebaseio.com/datos.json?auth='+token);
  }
  guardarEmpleados( empleados:Empleado[]){
    this.httpClient.put('https://testingangular-dgam-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
      /*response=>console.log("Se guardaron los datos:"+ response),
      error=>console.log("error: "+ error),*/
      {
        complete: console.info,
        error: console.error
      }
    );
  }

  actualizarEmpleado(indice:number, empleado:Empleado){

    let url='https://testingangular-dgam-default-rtdb.firebaseio.com/datos/'+indice+'.json';
    this.httpClient.put(url,empleado).subscribe(
      /*response=>console.log("Se guardaron los datos:"+ response),
      error=>console.log("error: "+ error),*/
      {
        complete: console.info,
        error: console.error
      }
    );
  }

  eliminarEmpleado(indice:number){
    let url='https://testingangular-dgam-default-rtdb.firebaseio.com/datos/'+indice+'.json';
    this.httpClient.delete(url).subscribe(
      /*response=>console.log("Se guardaron los datos:"+ response),
      error=>console.log("error: "+ error),*/
      {
        complete: console.info,
        error: console.error
      }
    );
  }

}
