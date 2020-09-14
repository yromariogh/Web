import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employe} from '../Modelo/Employe'
  

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/v1/employees';

  getEmployes(){
    return this.http.get<Employe[]>(this.Url);
  }

  createEmployes(employe:Employe){
    return this.http.post<Employe>(this.Url,employe);
  }


  getEmployeid(id: number){
    return this.http.get<Employe>(this.Url+"/"+id);
  }


  updateEmployee(employe:Employe) {
    return this.http.put(this.Url+"/"+employe.id, employe);
  }

  

  deleteEmployee(employe:Employe) {
    return this.http.delete(this.Url+"/"+employe.id);
  }


}
