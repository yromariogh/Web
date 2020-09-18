import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { TipoDocumento } from 'src/app/Modelo/TipoDocumento';
import { Ciudad } from 'src/app/Modelo/Ciudad';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  persona:Persona=new Persona();
  tiposdocumento:TipoDocumento[];
  ciudades:Ciudad[]
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getTipoDocumento()
    .subscribe(data=>{
      this.tiposdocumento=data;
    })
    this.service.getCiudad()
    .subscribe(data=>{
      this.ciudades=data;
    })
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}