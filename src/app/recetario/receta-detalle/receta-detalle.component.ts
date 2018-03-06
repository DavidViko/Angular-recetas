import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {
  @Input('r1') receta: Receta;
  constructor() {
    console.log ("Constructor receta-detalle.component");
   }

  ngOnInit() {
    console.log ("onInit receta-detalle.component");
  }

}
