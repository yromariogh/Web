import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { TipoDocumento } from '../Modelo/TipoDocumento';
import { Ciudad } from '../Modelo/Ciudad';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/v1/personas';
  Url_TipoDocumento = 'http://localhost:8080/api/v1/tiposdocumento';
  Url_Ciudad = 'http://localhost:8080/api/v1/ciudades';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  getTipoDocumento(){
    return this.http.get<TipoDocumento[]>(this.Url_TipoDocumento);
  }
  getCiudad(){
    return this.http.get<Ciudad[]>(this.Url_Ciudad);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }
}