import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  editingText: string = '';
  @Input('todo')
  todoProps!: TodoInterface;
  @Input('isEditing')
  isEditingProps!: boolean;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> =
    new EventEmitter();
  ngOnInit(): void {
    this.editingText = this.todoProps.text;
  }
  constructor(private todoService: TodosService) {}

  setTodoInEditMode(): void {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }
  removeTodo() {
    console.log('remove');
  }
  toggleTodo() {}
  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
    console.log('changeText');
  }
  changeTodo(): void {
    console.log('changeTodo', this.editingText);
    this.todoService.changeTodo(this.todoProps.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }
}
