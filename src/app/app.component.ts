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
      details: "ahf",
      d: "Wed Jun 13, 2018"
    },
    {
      title: "Buy pickles",
      desc: "false",
      details: "afdaf",
      d: "Wed Jun 13, 2018"
    },
    {
      title: "Buy garlic",
      desc: "false",
      details: "Hello",
      d: "Wed Jun 13, 2018"
    }
  ];

  addTodo(newTodoLabel, newDescLabel, newDetailsLabel, newdlabel) {
    console.log(this.addTodo);
    
    console.log(newdlabel);
    console.log(newTodoLabel);
  
    if (newTodoLabel && newDescLabel && newDetailsLabel !== "") {
      let newTodo = {
        title: newTodoLabel,
        desc: newDescLabel,
        details: newDetailsLabel,
        d: newdlabel
      };
      this.todos.push(newTodo);
    } else {
      alert("Please fill out all the fields!");
    }
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.title !== todo.title);
  }

  // Model: {
  //   year: 2018;
  //   month: 8;
  //   day: 5;
  // };
}
