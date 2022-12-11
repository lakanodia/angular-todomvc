import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
