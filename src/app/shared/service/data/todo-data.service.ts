import { Injectable } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private todo: Todo;

  // private todos: Todo[] = [
  //   { id: 1, title: 'Learn Oops', description: 'Desc- Learn Oops', targetDate: new Date(), done: false },
  //   { id: 2, title: 'Learn Java', description: 'Desc- Learn Java', targetDate: new Date(), done: false },
  //   { id: 3, title: 'Learn Angular', description: 'Desc- Learn Angular', targetDate: new Date(), done: true }
  // ];

  constructor(private http: HttpClient) { }

  // getTodos() {
  //   return this.todos;
  // }

  getTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8002/users/${username}/todos`)
  }

  getTodo(id: number) {
    return this.http.get<Todo>(`http://localhost:8002/users/sam/todos/${id}`)
  }

  
  deleteTodo(id : number) {
    return this.http.delete(`http://localhost:8002/users/{username}/todos/${id}`)
  }
}
