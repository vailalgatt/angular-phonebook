import { Component } from '@angular/core';

export class Contact {
  id: number;
  name: string;
  // phone: number;
  // email: string;
}

const CONTACTS: Contact[] = [
  { id: 1, name: 'Adam' },
  { id: 2, name: 'Katy' },
  { id: 3, name: 'Kyra' },
  { id: 4, name: 'Jill' },
  { id: 5, name: 'Yadira' },
  { id: 6, name: 'Judy' },
  { id: 7, name: 'Shay' },
  { id: 8, name: 'Bob' },
  { id: 9, name: 'Gene' },
  { id: 20, name: 'Robert' },
  { id: 10, name: 'Chuy' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>My Contacts</h2>
  <ul class="contacts">
    <li *ngFor="let contact of contacts"
      [class.selected]="contact === selectedContact"
      (click)="onSelect(contact)">
      <span class="badge">{{contact.id}}</span> {{contact.name}}
    </li>
  </ul>
  <div *ngIf="selectedContact">
    <h2>{{selectedContact.name}} details!</h2>
    <div><label>id: </label>{{selectedContact.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedContact.name" placeholder="name"/>
    </div>
  </div>
`,

styles: [`
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.heroes .text {
  position: relative;
  top: -3px;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
`]
})








export class AppComponent {
  title = 'Contacts';
  contacts = CONTACTS;
  selectedContact: Contact;

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}



