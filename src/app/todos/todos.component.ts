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

  clickar(id: number) {
    this.todos.forEach((element, index) => {
      if (this.todos[id] == element[index]) {
        this.todos[id].completed = !this.todos[id].completed;
        console.log("Se ha modificado algo la tarea %i a %o", id, this.todos[id].completed);
      }
    });
  }

  eliminarTarea(id: number) {
    console.log("Funcion eliminarTarea %i",id);
    this.todos.forEach((element, index) => {
      console.log("Funcion eliminarTarea %i",index);
      if (this.todos[id] === element[index-1]) {
        this.todos.splice(id,1);
        console.log("Dentro del if %o",this.todos);
      }
    }
