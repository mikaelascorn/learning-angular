import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List Name';
  todo = [
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
    { 
      label: 'Buy crackers', 
      done: false, 
      priority: 3 
    },
  ];
}
