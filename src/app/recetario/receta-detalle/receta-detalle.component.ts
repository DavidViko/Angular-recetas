import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {
  @Input('r1') c1: Receta;
  constructor() { }

  ngOnInit() {
  }

}
