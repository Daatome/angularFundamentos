import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {


  empleados:Empleado[]=[];

  //inyectamos el servicio de router y los que necesitemos
  constructor(private router: Router,private miServicio:ServicioEmpleadosService, private empleadosService:ServicioEmpleadoService){
    
  }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;

  }

  volverHome(){
    this.router.navigate(['']);
  }

  registraUsuario(name:string, lastname:string, charge:string, salary:string){
    this.empleadosService.agregarEmpleadoServicio(new Empleado(name,lastname,charge,parseInt(salary)));
    this.router.navigate(['']);
  }
}
