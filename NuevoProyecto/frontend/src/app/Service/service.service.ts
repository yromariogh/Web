import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/v1/personas';
  Url_TipoDocumento = 'http://localhost:8080/api/v1/tiposdocumento';
  Url_Ciudad = 'http://localhost:8080/api/v1/ciudades';

  getPersonasList():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona): Observable<Object>{
    return this.http.post(`${this.Url}`,persona);
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