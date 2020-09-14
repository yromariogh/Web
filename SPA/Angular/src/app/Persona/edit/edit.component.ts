import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Employe } from 'src/app/Modelo/Employe';
import { CompileDirectiveMetadata } from '@angular/compiler';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



  employe:Employe = new Employe();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }


  Edit(){
    let id=localStorage.getItem("id");
    this.service.getEmployeid(+id)
    .subscribe(data=>{
      this.employe=data;
    })
  }

  Actulizar(employe:Employe){
    this.service.updateEmployee(employe)
    .subscribe(data=>{
      alert("se actulizo con exito....!!");
      this.router.navigate(["listar"]);
    })

  }


}
