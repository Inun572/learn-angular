import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';
  count = 0;

  todos: string[] = ['eat', 'sleep', 'code', 'repeat'];
  newTodo = '';

  increment() {
    this.count += 1;
  }

  decrement() {
    if (this.count <= 0) return;
    this.count -= 1;
  }

  addTodo(e: KeyboardEvent) {
    if (this.newTodo === '') return;
    if (e.key === 'Enter') {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  onInputChange(event: Event) {
    this.newTodo = (event.target as HTMLInputElement).value;
  }
}
