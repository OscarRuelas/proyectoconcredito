import { Component, HostBinding, OnInit } from '@angular/core';
import { prospecto } from '../../models/prospecto';
import { ProspectoService } from '../../services/prospecto.service';
import { Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prospecto-form',
  templateUrl: './prospecto-form.component.html',
  styleUrls: ['./prospecto-form.component.css']
})
export class ProspectoFormComponent implements OnInit {
      formularioRegistro = new FormGroup({
        Nombreprospecto: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        Primerapellido: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        Segundo_apellido: new FormControl('', [Validators.maxLength(20)]),
        Calle: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        Numero: new FormControl(null, [Validators.required, , Validators.maxLength(4)]),
        Codigo_postal: new FormControl(null, [Validators.required, , Validators.maxLength(4)]),
        telefono: new FormControl('', [Validators.required, , Validators.maxLength(10)]),
        RFC: new FormControl('', [Validators.required, , Validators.maxLength(13)])
      });
        

  @HostBinding('class') classes = 'row';

  prospecto: prospecto={
    idprospecto: 0,
    Nombre_prospecto: '',
    Primer_apellido: '',
    Segundo_apellido: '',
    Calle: '',
    Numero: null,
    Codigo_postal: null,
    telefono: '',
    RFC: '',
    Estatus: 'E',
    imagen: ''
  };

  arreglo: any = [];

  constructor(private prospectosService: ProspectoService) { }

  ngOnInit() {
  }
  
  saveNewProspecto() {
    delete this.prospecto.idprospecto;
    this.prospectosService.saveProspecto(this.prospecto).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
      console.log('Formulario valido', this.formularioRegistro.valid);
      alert("Nuevo Prospecto Agregado");
  }

  imagen(event){
    console.log(event.target.value);

    if (event.target.files) {
      let reader: any = new FileReader();
      //Lee el archivo con el url
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev: any) => {
        //Llama al dataurl cuando es terminado
        let imagen = ev.target.result;
        this.arreglo.push(imagen);
        console.log(this.arreglo);
        console.log(JSON.stringify(this.arreglo));
        let variable = JSON.stringify(this.arreglo);
        this.prospecto.imagen = variable;
        
      }
    }
  }

  


}
