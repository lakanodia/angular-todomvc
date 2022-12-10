import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [TodosComponent],
  imports: [],
})
export class TodosModule {}
