import { makeAutoObservable } from "mobx";
import { contactType } from "../components/types";

class ContactsStore {
    contacts: Array<contactType> = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    getContacts(contacts) {
        this.contacts = [...contacts];
    }

    addContacts(contact) {
        this.contacts.push({id: contact, name: contact, email: contact});
        console.log('add', this.contacts)
    }
}

export default new ContactsStore()