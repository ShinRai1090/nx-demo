import { Injectable } from '@nestjs/common';
import { Todo } from '@nx-demo/nx-shared';

@Injectable()
export class TodosService {
  todos: Todo[] = [{
      title: 'Todo 1',
    },
    {
      title: 'Todo 2'
    }
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(title = `New todo ${Math.floor(Math.random() * 1000)}`) {
    this.todos.push({
      title: title
    });
  }
}
