import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'todos',
    loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
