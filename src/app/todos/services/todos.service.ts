import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);
  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text: text,
      isComplete: false,
      id: Math.random().toString(16),
    };
    const updateTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updateTodos);
  }
  toggleAll(isComplete: boolean): void {
    console.log('isComplete', isComplete);
    const updatedTodos = this.todos$.getValue().map((todo) => {
      return {
        ...todo,
        isComplete,
      };
    });
    this.todos$.next(updatedTodos);
  }

  changeFilter(filterName: FilterEnum): void {
    this.filter$.next(filterName);
    console.log(filterName);
  }
  changeTodo(id: string, text: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
  }

  removeTodo(id: string): void {
    const updatedTodos = this.todos$.getValue().filter((todo) => todo.id != id);
    this.todos$.next(updatedTodos);
  }

  toggleTodo(id: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
  }
}
