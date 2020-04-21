import { Injectable } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  // getTodos(username) {
  //   // 
  //   username = 'sam';
  //   let password = 'pass123';
  //   let basicAuthString = 'Basic ' + window.btoa(username + ':' + password)
  //   let headers = new HttpHeaders({ Authorization: basicAuthString })
  //   // 
  //   return this.http.get<Todo[]>(`http://localhost:8002/users/${username}/todos`, { headers });
  // }


  getTodo(id: number) {
    return this.http.get<Todo>(`http://localhost:8002/users/sam/todos/${id}`)
  }


  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:8002/users/{username}/todos/${id}`)
  }

  updateTodo(username: string, id: number, todo) {
    return this.http.put<Todo>(`http://localhost:8002/users/{username}/todos/${id}`, todo)
  }

  createTodo(username: string, todo) {
    // console.log(`createTodo: ${username }`);
    // console.log(todo);
    return this.http.post<Todo>(`http://localhost:8002/users/${username}/todos`, todo)
  }

}
