import { Component, OnInit } from '@angular/core';


import { Contact } from './contact';
import { ContactService } from './contact.service'


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
  <contact-detail [contact]="selectedContact"></contact-detail>
  `,

styles: [`
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.contacts {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
  font-size: 15px
}
.contacts li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.contacts li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
.contacts li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.contacts .text {
  position: relative;
  top: -3px;
}
.contacts .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.5em 0.7em 0 0.7em;
  background-color: #FFC0CB;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -5px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
  font-family: 'Nunito', sans-serif;    
}
`],
  providers: [ContactService]
})


export class AppComponent implements OnInit {
  title = 'Contacts';
  contacts = Contact[];
  selectedContact: Contact;

  constructor(private contactService: ContactService) { } //constructor defines a private contact service and an injection site

  getContacts(): void {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }

  ngOnInit(): void {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}



