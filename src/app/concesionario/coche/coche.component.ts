import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  //Parametro de Entrada desde el Componente Padre al Hijo
  @Input('c1') c1: Coche; // Coche para mostrar
  @Input('c2') c2: Coche; // Coche para comparar

  //Parametro de salida. Se realizan a través de EventEmitter de la clase @angular/core

  constructor() {
    console.log("CocheComponent constructor");
  }

  ngOnInit() {
    console.log("CocheComponent constructor");
  }

}
