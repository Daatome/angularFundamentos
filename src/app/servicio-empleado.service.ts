import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {
  empleados:Empleado[]
  constructor(private servicioVentana: ServicioEmpleadosService, private dataService:DataService) { 
    this.empleados=[];
  }

  setEmpleados(misEmpleados: Empleado[]){

    this.empleados=misEmpleados;
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }
  

/*
  empleados:Empleado[]=[
    new Empleado("Daniel", "Atonal","Desarrollador jr",10000),
    new Empleado("Angel", "Lopez","Desarrollador Sr",30000),
    new Empleado("Antonio", "Hernandez"," Project Manajer",20000),
  ];*/

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
    this.servicioVentana.muestraMensaje(empleado.nombre+" "+empleado.apellido+" "+ empleado.cargo+ " "+ empleado.salario);

    this.dataService.guardarEmpleados(this.empleados); 


  }
  getEmpleado(indice:number){
    return this.empleados[indice];
  }
  actualiza(indice:number, nombre:string, apellido:string, cargo:string, salario:number){
    this.empleados[indice].nombre=nombre;
    this.empleados[indice].apellido=apellido;
    this.empleados[indice].cargo=cargo;
    this.empleados[indice].salario=salario;
    
    this.dataService.actualizarEmpleado(indice,this.empleados[indice]);
    this.dataService.guardarEmpleados(this.empleados);



  }
  elimina(indice:number){
    //delete elmina la información pero no el espacio en si, solo aparece vacio
    //delete this.empleados[indice];
    //splice si elimina todo el lugar dado
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice);
    this.dataService.guardarEmpleados(this.empleados);
  }
}
