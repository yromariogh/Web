import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import { Employe } from 'src/app/Modelo/Employe';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  employes:Employe[];
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getEmployes()
    .subscribe(data=>{
       this.employes = data;
    }) 
  }
  Edit(employe:Employe):void{
    localStorage.setItem("id",employe.id.toString());
    this.router.navigate(["edit"]);

  }  

  Delete(employe:Employe){
    this.service.deleteEmployee(employe)
    .subscribe(data=>{
      this.employes= this.employes.filter(p=>p!==employe);
      alert("Persona eleminada!!");
    })
  }

}
