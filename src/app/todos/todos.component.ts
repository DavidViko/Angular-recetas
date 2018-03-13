import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';
import { element } from 'protractor';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  nuevaTarea: string;

  constructor(public todosService: TodosService) {
    console.log('TodosComponent constructor');
    this.todos = [];
  }

  ngOnInit() {
    console.log('TodosComponent onInit');
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }

    );//final subscribe

  }//final onInit

  cargarTareas() {
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

  /**
   * Mapea los Datos en formato Json a TODO que proviene del Servicio Rest
   * @param resul 
   */
  mapeo(resul: any) {
    let todo: Todo;
    resul.forEach(element => {
      todo = new Todo(element.title);
      todo.id = element.id;
      todo.idUser = element.UserId;
      todo.completed = element.completed;

      this.todos.push(todo);
    });
  }

  clicar(todo: Todo) {
    console.log('TodosComponent change %o', todo);
    this.todosService.patch(todo).subscribe(
      result => {
        console.log('Tarea modificada con exito %o', result);
        this.cargarTareas();
      },
      error => {
        alert('No de pudo Modificar la Tarea');
      }
    );

    // SIN CONECTARSE AL SERVICIO
    // this.todos.forEach((elemento, index) => {
    //   if (elemento.id === todo.id) {
    //     this.todos[index].completed = !todo.completed;
    //     return false; //break        
    //   }
    // });
  }

  // VERSION ALTERNATIVA PASANDO SOLO EL ID
  // clicar(id: number) { // Le paso solo el id en vez de el objeto entero
  //   var indice = this.buscarTareaPorId(id);
  //   this.todos[indice].completed = !this.todos[indice].completed;
  // }


  eliminarTarea(todo: Todo) {
    console.log("Funcion eliminarTarea %o", todo);
    this.todosService.delete(todo.id).subscribe(
      result => {
        this.cargarTareas();
      },
      error => {
        alert('No de pudo elimiar Tarea');
      }
    );
    /*
    this.todos.forEach( (t, index) =>{
      if ( t.id === todo.id ){
        this.todos.splice(index,1);
        return false; //break        
      }
    });*/
  };

  // VERSION ALTERNATIVA PASANDO SOLO EL ID
  eliminarTarea2(id) {
    const indice = this.buscarTareaPorId(id);
    this.todos.splice(indice, 1);
  }


  agregarTarea() {
    console.log('TodosComponent new ');
    let todo = new Todo(this.nuevaTarea);
    /*
    let todo = new Todo(this.nuevaTarea);
    this.todos.unshift(todo);
    this.nuevaTarea = "";
    */
    this.todosService.post(todo).subscribe(
      result => {
        console.log('TodosComponent new %o', result);
        this.cargarTareas();
      },
      error => {
        alert('No de pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
  }
  /**
   * Función que vale para buscar el objeto dentro del array "todos" por Id.
   * Devuelve el índice donde se encuentra el objeto buscado dentro del array.
   * Si se pasa el objeto todo entero desde el HTML no es neceario usar esta función
   * @param id Id pasado por parametro desde el html para buscar, borrar o modificar 
   */
  buscarTareaPorId(id): number {
    let i = 0;
    let encontrado = false;

    while (!encontrado) {
      if (this.todos[i].id === id) {
        encontrado = true;
      } else {
        i++;
      }
    }
    return i;
  }

}