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
      image: `<img src="../assets/mountain.jpeg" alt="">`,
      title: "Curabitur Rutrum ut",
      desc: "Vivamus fhalfj hafj lse",
      details: "Proin hfaljf hflajdf halgjla lhalfj afdag...",
      date: "Wed Jun 13, 2018"
    },
    {
      title: "Nunc nibh purup",
      desc: "Vivamus fhalfj hafj ls",
      details: "Nulla tincidhaljr lohlaf hfji hafjk afhlajfjaf",
      date: "Wed Jun 13, 2018"
    },
    {
      title: "Buy garlic",
      desc: "Vivamus fhalfj hafj ls",
      details: "Proin hfaljf hflajdf halgjla lhalfj afdag...",
      date: "Wed Jun 13, 2018"
    }
  ];

  addTodo(newTodoLabel, newDescLabel, newDetailsLabel, date) {
    console.log(date);
    if (newTodoLabel && newDescLabel && newDetailsLabel !== "") {
      let newTodo = {
        title: newTodoLabel,
        desc: newDescLabel,
        details: newDetailsLabel,
        date: date
      };
      this.todos.push(newTodo);
    } else {
      alert("Please fill out all the fields!");
    }
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.title !== todo.title);
  }
}
  
