import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecetasService } from '../providers/recetas.service';
import { Receta } from '../model/receta';
import { } from 'events';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  recetario: Array<Receta>; // o tb: Receta[]
  recetaSelec: Receta;
  glutenFilter : boolean;
  @Output() eventoEmitir = new EventEmitter();

  constructor(public recetasService: RecetasService) {
    console.log("Constructor recetario");
    this.recetario = new Array<Receta>();
  }

  ngOnInit() {
    this.recetario = this.recetasService.getAll();
    this.recetaSelec = this.recetario[0] || new Receta("Anonimo");
  }

  seleccionar($event, receta: Receta) {
    this.recetaSelec = receta;
    console.log("RecetarioComponent: Emitimos evento al Componente hijo %o", this.recetaSelec);
    this.eventoEmitir.emit({ receta: this.recetaSelec });
  }

  toggleBoton() {
    var etiqueta = document.getElementById("lblGluten");

    var numClases = etiqueta.classList.length;
    etiqueta.classList.toggle("btn-danger", numClases > 2);
    etiqueta.classList.toggle("btn-danger", numClases <= 1);
  }

}
