import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodosService } from './services/todos.service';

import { TodosComponent } from './todos.component';

const todosRoutes: Routes = [{
  path: '',
  component: TodosComponent
}];

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todosRoutes),
  ],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
