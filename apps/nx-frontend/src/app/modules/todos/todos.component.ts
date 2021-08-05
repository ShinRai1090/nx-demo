import { Component, OnInit } from '@angular/core';

import { Todo } from '@nx-demo/nx-shared';

import { TodosService } from './services/todos.service';


@Component({
  selector: 'nx-demo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todosService.fetchAll()
    .subscribe(
      (t) => {
        this.todos = t;
      }
    );
  }

  addTodo() {
    this.todosService.addTodo()
    .subscribe(
      () => {
        this.fetchTodos();
      }
    );
  }

}
