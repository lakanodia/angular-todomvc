import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  text: string = '';
  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    this.text = target.value;
    console.log(this.text);
  }
  addTodo(): void {
    console.log('todo', this.text);
  }
}
