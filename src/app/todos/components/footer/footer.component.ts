import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { map, Observable } from 'rxjs';
import { FilterEnum } from '../../types/filter.enum';
@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  itemsLeftText$: Observable<string>;
  activeCount$: Observable<number>;
  noTodosClass$: Observable<boolean>;
  filterEnum = FilterEnum;
  filter$: Observable<FilterEnum>;

  constructor(private todoService: TodosService) {
    this.activeCount$ = this.todoService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isComplete).length)
    );
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    );
    this.noTodosClass$ = this.todoService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.filter$ = this.todoService.filter$;
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    this.todoService.changeFilter(filterName);
  }
}
