import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todo } from '@nx-demo/nx-shared';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAll() {
    return this.http.get<Todo[]>('/api/todos');
  }

  addTodo() {
    return this.http.post('/api/todos/create', {});
  }
}
