import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { ListarComponent } from './Persona/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }