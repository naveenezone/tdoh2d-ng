import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/shared/service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/model/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  id: number;
  todo: Todo;


  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  // ngOnInit() {
  //   this.id = this.route.snapshot.params['id'];
  //     this.todoDataService.getTodo(this.id).subscribe(
  //       data => {
  //         this.todo = data
  //         // console.log(this.todo);
  //       }
  //     );
  // }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = { id: this.id, title: '', description: '', targetDate: new Date(), done: true }

    if (this.id != -1) {
      this.todoDataService.getTodo(this.id).subscribe(
        data => {
          this.todo = data
          // console.log(this.todo);
        }
      );
    }
  }

  // UpdateTodo() {
  //   this.todoDataService.updateTodo('sam', this.id, this.todo).subscribe(
  //     data => {
  //       // console.log(data)
  //       this.router.navigate(['todos']);
  //     }
  //   )
  // }

  saveTodo() {
    if (this.id == -1) {

      this.todoDataService.createTodo('sam', this.todo).subscribe(
        data => {
          //        console.log(`Test-New-data-1: ${data}`)
          this.router.navigate(['todos']);
        }
      );
    }
    else {
      this.todoDataService.updateTodo('sam', this.id, this.todo).subscribe(
        data => {
          // console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }
  }



}
