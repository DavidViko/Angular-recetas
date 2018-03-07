import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';
@Pipe({
  name: 'filter'
})
export class FilterRecetaPipe implements PipeTransform {

  /**
   * 
   * @param recetas Array de recetas
   * @param searchText Texto de busqueda
   */
  transform(items: Receta[], searchText: string, isGlutenFree: boolean): Receta[] {

    //si no hay recetas retornar vacio
    if (!items) return [];

    let recetasFilterArray: Receta[] = [];

    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      items.forEach(it => {
        if (it.isGlutenFree) {
          recetasFilterArray.push(it);
        }
      });
    } else {
      recetasFilterArray = items;
    }

    //De los que quedan, filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray; // Si no hay texto se devuelve todo el array
    } else {
      searchText = searchText.toLowerCase();
      let receta = '';
      return recetasFilterArray.filter(it => {


        receta = it.nombre + it.ingredientes + it.cocinero;
        receta = receta.toLowerCase();

        return receta.includes(searchText);
      });
    }


    //   if (!searchText && isGlutenFree){
    //     items.forEach( it =>{
    //       if ( it.isGlutenFree ){
    //         return it;
    //       }
    //     });
    //   } 
    //   searchText = searchText.toLowerCase();
    //   //console.log(`filter isGlutenFree ${isGlutenFree}`);

    //   let receta = '';
    //   return items.filter(it => {

    //     if (isGlutenFree) {
    //       if (it.isGlutenFree) {
    //         receta = it.nombre + it.ingredientes + it.cocinero;
    //         receta = receta.toLowerCase();
    //       }
    //     } else {
    //       receta = it.nombre + it.ingredientes + it.cocinero;
    //       receta = receta.toLowerCase();
    //     }
    //     return receta.includes(searchText);
    //   });
    // }

  }
}