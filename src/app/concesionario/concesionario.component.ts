import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';
import { CochesService } from '../providers/coches.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {
  stock: Array<Coche>; // Array casteado a Coche. Otra forma: Coche[]
  coche1: Coche;
  coche2: Coche;
  
  // ******* Inicializar los atributos **************
  constructor(public cochesService: CochesService) {
    this.stock = new Array<Coche>();

    this.coche1 = new Coche ('','');
    this.coche2 = new Coche ('','');

    // ***** Estos datos nos los provee el Service ******* //
    // this.stock.push (new Coche('Seat','Panda'));
    // this.stock.push (new Coche('Toyota','Verso'));
    // this.stock.push (new Coche('Opel','Corsa','v1.6'));
  }

  //********* Llamadas a los Servicios ******************
  ngOnInit() {
    this.stock = this.cochesService.getAll();
  }
  recibirCoche(event){
    console.log("ConcesionarioComponent: Recibimos evento del Componente Hijo %o", event.coche);
    this.coche2 = this.coche1;
    this.coche1 = event.coche;
    
  }
}
