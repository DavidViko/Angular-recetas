import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';
import { element } from 'protractor';

@Injectable()
export class CochesService {

  constructor() { 
    console.log('CochesService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
  getAll():Coche[]{
    console.log('CochesService getAll');
    let coches:Coche[] = [];
    let coche;
    
    let jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach( element => {
      
        coche = new Coche( 
                          element.marca, 
                          element.modelo,
                          element.version,
                          element.foto,
                          element.id,
                          element.puertas,
                          element.caballos,
                          element.consumo
                          );

        coches.push(coche);

    });

    return coches;
  }


}