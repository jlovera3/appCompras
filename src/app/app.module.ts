import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PresupuestosService } from './servicios/presupuestos.service';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { EditproveeComponent } from './proveedores/editprovee/editprovee.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, 
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] }, 
  { path: 'addprovee', component: AddproveeComponent, canActivate: [GuardService] }, 
  { path: 'addpres', component: AddpresComponent, canActivate: [GuardService] }, 
  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] }, 
  { path: 'editpres/:id', component: EditpresComponent, canActivate: [GuardService] }, 
  { path: 'registro', component: RegistroComponent }, 
  { path: 'inises', component: InisesComponent }, 
  { path: 'editprovee/:id', component: EditproveeComponent, canActivate:[GuardService] },
  { path: '**', component: InicioComponent }];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    EditproveeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
