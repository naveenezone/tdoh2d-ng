import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../shared/service/data/todo-data.service';
import { Todo } from '../shared/model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todo: Todo;
  public todos: Todo [];
  
  
  constructor(private todoDataService:TodoDataService) { }
 
  
   ngOnInit() {
     // console.log(this.todoDataService.getTodos('sam')); 
      this.todoDataService.getTodos('sam').subscribe(response => {
       // console.log(`response- `);
       // console.log(response); 
       this.todos = response
     }
       );
       
      }


}
