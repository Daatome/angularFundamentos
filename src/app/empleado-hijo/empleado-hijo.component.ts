import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
//asi se ceclaran las variables que va a recibir del padre
  @Input() empleadoDeLista:Empleado;
  @Input() indicepasado:number;

//inyeccion de dependencia
  constructor(private miServicio:ServicioEmpleadosService){}

  arrayCaracteristicas:any = [];

  agregarCaracteristica(nuevaCaract: string) {
    this.arrayCaracteristicas.push(nuevaCaract);
    this.miServicio.muestraMensaje("Caracteristica : "+ nuevaCaract+" agregada");

  }

}
