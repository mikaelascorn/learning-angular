import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "List Name";
  total = "Total";
  todos = [
    {
      title: "Curabitur Rutrum ut",
      desc: "false",
      details: "3"
    },
    {
      title: "Buy pickles",
      desc: "false",
      details: "1"
    },
    {
      title: "Buy garlic",
      desc: "false",
      details: "Hello"
    }
  ];

  addTodo(newTodoLabel, newDescLabel, newDetailsLabel) {
    if ( newTodoLabel && newDescLabel && newDetailsLabel !== '' ) {
      let newTodo = {
        title: newTodoLabel,
        desc: newDescLabel,
        details: newDetailsLabel
      };
      this.todos.push(newTodo);
    } else {
      alert('Please fill out the todo fields!');
    }
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.title !== todo.title);
  }

  Ctrl(scope) {
    console.log(scope);
    
    this.date = new Date();
  }
}
