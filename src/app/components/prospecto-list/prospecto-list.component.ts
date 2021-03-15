import { Component, HostBinding, OnInit } from '@angular/core';

import { ProspectoService } from '../../services/prospecto.service';

@Component({
  selector: 'app-prospecto-list',
  templateUrl: './prospecto-list.component.html',
  styleUrls: ['./prospecto-list.component.css']
})
export class ProspectoListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  prospectos: any = [];

  id: number;
  todos: any;
  arg: any;

  constructor(public prospectosService: ProspectoService) { }

  ngOnInit() {
    this.prospectosService.getProspectos().subscribe(
      res => {
        this.prospectos = res;
      },
      err => console.error(err)
    );
  }
  oscar(idprospecto: number){
    this.id = idprospecto
    this.prospectosService.selectProspecto(idprospecto).subscribe((data) => {
      console.log(data);
      console.log(JSON.parse(data[0].imagen));
      this.todos=data;
      this.arg = JSON.parse(data[0].imagen);
      console.log();
    });
  }

  // Parameters:
  // contentType: The content type of your file. 
  //              its like application/pdf or application/msword or image/jpeg or
  //              image/png and so on
  // base64Data: Its your actual base64 data
  // fileName: Its the file name of the file which will be downloaded. 
  descargar(imagen){
      const linkSource = imagen;
      const downloadLink = document.createElement("a");
      const fileName = "imagen.jpeg";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
  }
}
