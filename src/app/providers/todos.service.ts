import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';
import { GLOBAL } from '../global';

@Injectable()
export class TodosService {
  

  constructor( public http: HttpClient) { 
    console.log('TodosService constructor');
  }


  getTodos():Observable<any>{

    //let url = END_POINT + '/todos?userId=2';
    let url = GLOBAL.endpoint + '/todos';
    console.log(`TodosService getTodos ${url}`);
    return this.http.get(url);

  }

  delete(id){
    let url = GLOBAL.endpoint + '/todos/'+id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

post(todo:Todo){
    let url = GLOBAL.endpoint + '/todos/';
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                  "userId": todo.idUser,
                  "title": todo.title,
                  "completed": todo.completed    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }

  patch(todo: Todo):Observable<any>{
    let url = GLOBAL.endpoint + `/todos/${todo.id}`;
    console.log(`TodosService patch ${url}`);
    console.log("TodosService patch"+url);

    let body = {                    
                  "completed": !todo.completed    
                } 
              
    
    return this.http.patch( url, body );
  }

}