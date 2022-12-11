import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private todoService: TodosService) {
    this.todoService.todos$.subscribe((todo) => {
      console.log('todo', todo);
    });
  }
  text: string = '';
  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    this.text = target.value;
    console.log(this.text);
  }
  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
