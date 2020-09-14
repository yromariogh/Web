import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Employe } from 'src/app/Modelo/Employe';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employe: Employe = new Employe();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  
  Guardar(){
    this.service.createEmployes(this.employe)
    .subscribe(data=>{
      alert("se agrego con exito...!!!");
      this.router.navigate(["listar"]);
    })

  }

}
