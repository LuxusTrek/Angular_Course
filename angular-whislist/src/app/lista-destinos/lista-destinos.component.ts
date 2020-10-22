import { Component, OnInit } from '@angular/core';
import { Destino } from '../models/destino.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: string[];
  constructor() { 
    this.destinos = ['Barranquilla', 'lima', 'Buenos Aires', 'Barcelona'];
  }

  ngOnInit(): void {
  }
  guardar(nombre,url):boolean{
    console.log(new Destino(nombre,url));
    
    return false;
  }

}
