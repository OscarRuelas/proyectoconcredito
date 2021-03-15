import { Component, OnInit } from '@angular/core';
import { prospecto } from '../../models/prospecto';
import { ProspectoService } from '../../services/prospecto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prospecto-evaluacion',
  templateUrl: './prospecto-evaluacion.component.html',
  styleUrls: ['./prospecto-evaluacion.component.css']
})
export class ProspectoEvaluacionComponent implements OnInit {

  /*prospecto: prospecto={
    idprospecto: 0,
    Nombre_prospecto: '',
    Primer_apellido: '',
    Segundo_apellido: '',
    Calle: '',
    Numero: 0,
    Codigo_postal: 0,
    telefono: '',
    RFC: '',
    Estatus: 'A'
  };*/


  prospectos: any = [];
  prueba: any = []
  activo: any = {};
  rechazado: any = {};
  comentario: any;
  id: number;
  estatus: string;
  boton: boolean = true;
  status: string;
  modal: boolean = true;
  



  constructor(public prospectosService: ProspectoService, public activedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.prospectosService.getProspectos().subscribe(
        res => {
          this.prospectos = res;
          console.log(res);
        },
        err => console.error(err)
      );
  }

  editProspecto(idprospecto: number, estatus: string) {
    if(estatus != "E" ){
      alert("No se puede alterar el valor del estatus");
    }else{
    //this.activo.id_prospecto = idprospecto;
    this.activo.estatus = "A";
    console.log(this.activo);
    this.prospectosService.updateProspecto(idprospecto, this.activo).subscribe(() => {});
    }
  }

  RechazadoProspecto(idprospecto: number, estatus: string) {
    console.log(idprospecto) 
    this.id = idprospecto;
    console.log(estatus);
    this.status = estatus;
    if(this.status != 'E'){
      alert("No se puede alterar el valor del estatus");
      this.modal=false;
    }
    /*this.rechazado.id_prospecto = idprospecto;
    this.rechazado.estatus = "R";
    console.log(this.rechazado);
    this.prospectosService.updateProspecto(idprospecto, this.rechazado).subscribe(() => {});*/
  }

  guardar(){
    if(this.status != "E" ){  
      this.rechazado.estatus = "R";
      this.rechazado.comentario_rechazo = this.comentario;
      this.prospectosService.updateProspecto(this.id, this.rechazado).subscribe(() => {});
    }else{
      alert("No se puede alterar el valor del estatus");
    }
  }

  actualizar(){
    this.prospectosService.Select().subscribe(
      res => {
        this.prospectos = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
