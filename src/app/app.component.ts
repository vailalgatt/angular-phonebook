import { Component } from '@angular/core';

export class Person {
  id: number;
  name: string;
  phone: number;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>{{person.name}} details!</h2>
  <div><label>id: </label>{{person.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="person.name" placeholder="name">
  </div>
  <div><label>Phone: </label>{{person.phone}}</div>  
  <div>
    <label>email: </label>
    <input [(ngModel)]="person.email" placeholder="email@gmail.com">
  </div>
  
  `
})


export class AppComponent {
  title = 'Contacts';
  person: Person = {
    id: 1,
    name: 'Adam',
    email: 'adam@gmail.com',
    phone: 222222222
  }
}



