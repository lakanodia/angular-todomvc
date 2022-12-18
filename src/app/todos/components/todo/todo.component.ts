import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

function viewChild(textInput1: string) {}

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnChanges {
  editingText: string = '';
  @Input('todo')
  todoProps!: TodoInterface;
  @Input('isEditing')
  isEditingProps!: boolean;
  @ViewChild('textInput')
  textInput!: ElementRef;
  @Output('setEditingId')
  setEditingIdEvent: EventEmitter<string | null> = new EventEmitter();
  ngOnInit(): void {
    this.editingText = this.todoProps.text;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['isEditingProps'].currentValue) {
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      }, 0);
    }
  }

  constructor(private todoService: TodosService) {}

  setTodoInEditMode(): void {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }
  removeTodo() {
    console.log('remove');
    this.todoService.removeTodo(this.todoProps.id);
  }
  toggleTodo() {
    this.todoService.toggleTodo(this.todoProps.id);
  }
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
