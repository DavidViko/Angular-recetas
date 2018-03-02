import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {
  stock: Array<Coche>; // Array casteado a Coche. Otra forma: Coche[]
  coche1: Coche;
  coche2: Coche;
  
  constructor() {
    this.stock = new Array<Coche>();

    this.coche1 = new Coche('','');
    this.coche2 = new Coche('','');

    this.stock.push (new Coche('Seat','Panda'));
    this.stock.push (new Coche('Toyota','Verso'));
    this.stock.push (new Coche('Opel','Corsa','v1.6'));
  }
  ngOnInit() {
  }
  recibirCoche(event){
    console.log("ConcesionarioComponent: Recibimos evento del Componente Hijo %o", event.coche);
    if (this.coche1.marca == ""){
      this.coche1 = event.coche;
    } else{
      this.coche2 =this.coche1;
      this.coche1 = event.coche;
    }
    
  }
}
