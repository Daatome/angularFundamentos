import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {


  empleados:Empleado[];
  accion:number=-1;


  constructor( private router:Router , private route:ActivatedRoute ,private serviceEmpleado:ServicioEmpleadoService, private serviceEmpleados:ServicioEmpleadosService){

    this.empleados=this.serviceEmpleado.empleados;
  }

  ngOnInit():void{
    this.indice= this.route.snapshot.params['id'];
    this.accion=this.route.snapshot.queryParams['accion'];

    let empleado:Empleado= this.serviceEmpleado.getEmpleado(this.indice);
    this.nombre=empleado.nombre;
    this.apellido=empleado.apellido;
    this.cargo=empleado.cargo;
    this.salario=empleado.salario;
  }
  
  actualizaUsuario(){
    this.serviceEmpleado.actualiza(this.indice, this.nombre, this.apellido, this.cargo, this.salario);
    this.router.navigate(['']);
    
  }

  eliminaUsuario(){
    this.serviceEmpleado.elimina(this.indice);
    this.router.navigate(['']);
  }
  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  indice:number=0;
}
