import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'app-employes';
  empleados:Empleado[]=[];
  //inyeccion del servicio
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:ServicioEmpleadoService){
    //this.empleados=this.empleadosService.empleados;
  }

  ngOnInit(): void {
    //this.empleados=this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });

  }
  


  registraUsuario(name:string, lastname:string, charge:string, salary:string){
    this.empleadosService.agregarEmpleadoServicio(new Empleado(name,lastname,charge,parseInt(salary)));
    
  }
}
