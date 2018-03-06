import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';
@Pipe({
  name: 'filterGluten'
})
export class GlutenPipe implements PipeTransform {
/**
 * Filtro para buscar en una colección de Recetas. No es CaseSensitive (Le da igual mayus o minus)
 * @param items Array de Recetas
 * @param glutenFree Booleano con el valor isGlutenFree
 */
  transform(items: Receta[], glutenFree: boolean): Receta[] {

    if(!items) return []; // Si no elemetos en el array

    let buscado = false;
    return items.filter( recetaIt => {
        buscado = recetaIt.isGlutenFree;
       
    });
   }

}