import  { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {
  getContacts(): Promise<Contact[]> {
    return Promise.resolve(CONTACTS);
  }

  getContactsSlowly(): Promise<Contact[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getContacts()), 2000);
    });
  }
}
//async promises