import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  
}
