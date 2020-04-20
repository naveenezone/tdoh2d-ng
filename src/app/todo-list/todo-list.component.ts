import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../shared/service/data/todo-data.service';
import { Todo } from '../shared/model/todo.model';
import { equal } from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todo: Todo;
  public todos: Todo[];
  private mesgResgetTodo;
  private mesgErrResgetTodos: string;
  private mesgErrResdelTodo: string;
  public mesgdelete: any;

  constructor(private todoDataService: TodoDataService, private router: Router) { }


  ngOnInit() {
    // console.log(this.todoDataService.getTodos('sam')); 
    // this.todoDataService.getTodos('sam').subscribe(response => {
    // console.log(`response- `);
    // console.log(response); 
    // this.todos = response
    // }
    // );

    this.refreshTodos();

  }

  errResdelTodo(error) {
    this.mesgErrResdelTodo = "Error Occcured while deleting in API";
  }

  errResgetTodos(error) {
    this.mesgErrResgetTodos = "Error Occcured in API";
  }

  deleteTodo(id) {
    // console.log(`deleteTodo ${id}`);

    this.todoDataService.deleteTodo(id).subscribe(response => {
      this.mesgResgetTodo = response;
      // console.log(this.mesgResgetTodo);
      this.mesgdelete = `Delete of Todo ${id} - '${this.mesgResgetTodo.title}' successfull!`
      this.refreshTodos();

    },
      error => {
        this.errResdelTodo(error);
      }
    );

  }

  refreshTodos() {
    this.todoDataService.getTodos('sam').subscribe(response => {
      this.todos = response
      // console.log(this.todos);
    },
      error => {
        this.errResgetTodos(error)
      }
    );
  }

  addTodo() {
    // console.log(`AddTodo`);
    this.router.navigate(['todos', -1, 'new']);
  }


  sayYesNo(ops) {
    if (ops) {
      // console.log('ops is true.');
      return 'Yes'
    }
    else {
      // console.log('ops is false.');
      return 'No'
    }
  }

}
