import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { TipoDocumento } from 'src/app/Modelo/TipoDocumento';
import { Ciudad } from 'src/app/Modelo/Ciudad';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona :Persona=new Persona();
  tiposdocumento :TipoDocumento[];
  ciudades: Ciudad[];
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    this.service.getTipoDocumento()
    .subscribe(data=>{
      this.tiposdocumento=data;
    })
    this.service.getCiudad()
    .subscribe(data=>{
      this.ciudades=data;
    })
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })

  }
  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    },
    error => console.log(error))
  }

}