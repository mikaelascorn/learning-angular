import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List Name';
  todos = [
    { 
      label: 'Buy milk', 
      done: false, 
      priority: 3
    },
    { 
      label: 'Buy pickles', 
      done: false, 
      priority: 1
    },
    { 
      label: 'Buy garlic', 
      done: false, 
      priority: 2
    },
  ];

  addTodo(newTodoLabel) {
    let newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label );
  };
}
