import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoCaracteristicasComponent } from './empleado-caracteristicas/empleado-caracteristicas.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { DataService } from './data.service';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoginService } from './login.service';


const routes: Routes=[
//comillas vacias en el path ya que es la vista principal
  {path:'', component: HomeComponentComponent},
  {path: 'proyectos' , component: ProyectosComponentComponent},
  {path: 'quienes' , component: QuienesComponentComponent},
  {path: 'contacto' , component: ContactoComponentComponent},
  {path: 'actualiza/:id' , component: ActualizaComponentComponent},
  {path: 'login' , component: LoginComponentComponent},
  {path: '**' , component: ErrorPersonalizadoComponentComponent },
  //"**" indica que cualquier cosa diferente a las rutas de arriba vaya al componente indicado
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoCaracteristicasComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponentComponent,
    LoginComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    
  ],
  providers: [
    ServicioEmpleadosService, 
    ServicioEmpleadoService,
    DataService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
