import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <h2>{{carPart.name}}</h2>
  <p>{{carPart.description}}</p>
  <p>{{carPart.inStock}} in Stock.</p>`
})
export class AppComponent {
  title = 'My Second Angular 2 App';
  carPart = {
    "id" : 1,
    "name" : "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5
  };
 }
