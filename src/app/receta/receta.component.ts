import { Component, OnInit } from '@angular/core';
import { Receta } from "../model/receta";

@Component({ // este trocito de código se le llama decorador
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})

export class RecetaComponent implements OnInit {

  receta: Receta;
  show: boolean;
  glyphicon: string;

  constructor() {
    console.log('RecetaComponent constructor');

    this.receta = new Receta('Marmitako', 'Ander Uraga');
    this.receta.addIngrediente('bonito');
    this.receta.addIngrediente('patatas');
    this.receta.addIngrediente('aceite');
    this.receta.addIngrediente('pimiento verde');
    this.receta.addIngrediente('pimiento choricero');

    this.receta.imagen = "../assets/img/marmitako.jpg";
    this.receta.descripcion = "Es un plato basado en Thunnus alalunga (atún blanco o bonito del norte), cuyo origen se encuentra en los pescadores asturianos, cántabros y vascos (arrantzales en euskera). Se trata de un guiso de bonito con patatas, cebolla, pimiento y tomate, principalmente. En algunos lugares se sirve caliente en una cazuela de barro."
    this.show = false;
    this.glyphicon = "glyphicon-menu-down";
  }
  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLikes() {
    this.receta.likes = this.receta.likes + 1;
    console.log('Click sumarlike');
  }

  showIngre() {
    console.log('Click show Ingre ', this.show)
    this.show = !this.show;
    this.glyphicon = (this.show) ? 'glyphicon-menu-up' : 'glyphicon-menu-down';
  }

}
