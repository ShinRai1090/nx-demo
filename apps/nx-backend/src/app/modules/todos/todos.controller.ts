import { Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

import { CONSTANTS } from '@nx-demo/nx-shared';

@Controller('todos')
export class TodosController {

  constructor(private todosService: TodosService) {}

  @Get('')
  getData() {
    return this.todosService.getTodos();
  }

  @Post('create')
  addTodo() {
    this.todosService.addTodo();

    return {
      success: CONSTANTS.SUCCESS
    }
  }
}
