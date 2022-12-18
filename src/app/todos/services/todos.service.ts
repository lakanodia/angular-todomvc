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
}
