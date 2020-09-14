import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from "../../Service/service.service";
import { Employee } from "src/app/Modelo/Employee";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  employees:Employee[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEmployees()
    .subscribe(data=>{
      this.employees=data;
    })
  }

}
