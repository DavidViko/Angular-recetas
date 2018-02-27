import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  // atributos
  nombre: string;
  imagen:string;
  descripcion: string;
  cocinero:string;
  likes: number;
  isGlutenFree: boolean;
  ingredientes: string[];
  show:boolean;

  constructor() {
    console.log('RecetaComponent constructor');
    this.nombre = 'Bokata kalamares';
    this.cocinero ="Karlos Arguiñano";
    this.descripcion = 'Bocadillo relleno de calamares rebozados en forma de aro';
    this.likes = 13;
    this.imagen = 'https://masdemadrid.com/wp-content/uploads/2017/03/bocadillo-calamares-560x314.jpg';
    this.isGlutenFree = true;
    this.ingredientes = ['Calamares','Pan','Salsa Ali-oli','Limón'];
    this.show = false;
  }
    
  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLikes(){
    this.likes++;
    console.log('Click sumarlike');
  }

  showIngre(){
    this.show=!this.show;
  
  }

}
