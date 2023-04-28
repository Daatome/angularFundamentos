import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empleado-caracteristicas',
  templateUrl: './empleado-caracteristicas.component.html',
  styleUrls: ['./empleado-caracteristicas.component.css']
})
export class EmpleadoCaracteristicasComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string){
    this.caracteristicasEmpleados.emit(value);//practicamente se emite el valor a compartir como un evento
  }
}
