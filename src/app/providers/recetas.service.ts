import { Injectable } from '@angular/core';
import { MOCKS_RECETARIO } from './mocks.recetario';
import { element } from 'protractor';
import { Receta } from '../model/receta';

@Injectable()
export class RecetasService {

  constructor() { 
    console.log('RecetasService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
  getAll():Receta[]{
    console.log('RecetasService getAll');
    let recetas:Receta[] = [];
    let rec;
    
    let jsonData = JSON.parse(MOCKS_RECETARIO.recetario);

    jsonData.forEach( element => {
              rec = new Receta( 
                          element.nombre,
                          element.cocinero, 
                          element.imagen,
                          element.descripcion,    
                          element.likes,
                          element.isGlutenFree,
                          element.ingredientes,
                          element.id
                          );

        recetas.push(rec);

    });

    return recetas;
  }
}