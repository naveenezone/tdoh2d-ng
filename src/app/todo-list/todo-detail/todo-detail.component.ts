import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from 'src/app/shared/model/todo.model';
import { TodoDataService } from 'src/app/shared/service/data/todo-data.service';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  public todo: Todo;

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.todoDataService.getTodo(id).subscribe(
      response => {
        this.todo = response
      }
    );
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
