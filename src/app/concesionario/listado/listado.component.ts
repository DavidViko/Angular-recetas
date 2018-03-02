import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input('stockParametro') stock: Array<Coche>;
  @Output() eventoEmitir = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  //Funcion para Emitir el Evento desde el Hijo al Padre. El objeto "this.coche" es lo que envía el hijo al padre
  seleccionar($event, coche: Coche) {
    console.log("CocheComponent: Emitimos evento al Componente Padre %o",coche);
    this.eventoEmitir.emit({ "coche": coche });
  }

}
