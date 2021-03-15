import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { prospecto } from '../models/prospecto';
import { Observable } from 'rxjs';
@Injectable()
export class ProspectoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProspectos(){
    return this.http.get('http://localhost:3000/api');
  }
  
  selectProspecto(id: number){
    return this.http.get(`http://localhost:3000/api/${id}`);
  }

    Select(){
    return this.http.get('http://localhost:3000/api');
  }

  /*
  deleteGame(id:string){
    return this.http.delete(`{this.API_URI}/games/${id}`);
  }*/

  updateProspecto(id: number, updatedProspecto){
    return this.http.put(`http://localhost:3000/api/${id}`, updatedProspecto);
  }

  saveProspecto(prospecto: prospecto){
    console.log(prospecto);
    return this.http.post('http://localhost:3000/api', prospecto);
  }

}
