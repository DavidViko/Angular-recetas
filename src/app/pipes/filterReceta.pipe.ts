import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';
@Pipe({
  name: 'filter'
})
export class FilterRecetaPipe implements PipeTransform {
/**
 * Filtro para buscar en una colección de Recetas. No es CaseSensitive (Le da igual mayus o minus)
 * @param items Array de Recetas
 * @param searchText String el string buscado
 */
  transform(items: Receta[], searchText: string): Receta[] {

    if(!items) return []; // Si no elemetos en el array
    if(!searchText) return items; // Si no hay criterio de búsqueda
    searchText = searchText.toLowerCase(); //Pasa a minuscula la búsqueda
    let buscado = "";
    return items.filter( recetaIt => {
        buscado = recetaIt.nombre + " "+ recetaIt.cocinero;
        buscado = buscado.toLowerCase();
        return buscado.includes(searchText);
    });
   }

}