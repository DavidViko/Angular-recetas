import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';
@Pipe({
  name: 'filter'
})
export class FilterCochePipe implements PipeTransform {
/**
 * Filtro para buscar en una colección de Coches. No es CaseSensitive (Le da igual mayus o minus)
 * @param items Array de Coches
 * @param searchText String con la marca o modelo de coche
 */
  transform(items: Coche[], searchText: string): Coche[] {

    if(!items) return []; // Si no elemetos en el array
    if(!searchText) return items; // Si no hay criterio de búsqueda
    searchText = searchText.toLowerCase(); //Pasa a minuscula la búsqueda
    let marcaModelo = "";
    return items.filter( cocheIt => {
        marcaModelo = cocheIt.marca + " " + cocheIt.modelo;
        marcaModelo = marcaModelo.toLowerCase();
        return marcaModelo.includes(searchText);
    });
   }

}