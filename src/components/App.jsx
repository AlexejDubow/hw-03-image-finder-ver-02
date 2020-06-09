import React, { Component } from "react";
import ContactsList from "./ContactsList";
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import filterContacts from "../helpers/FilterContacts";
import { v4 as uuidv4 } from "uuid";


export default class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem('contacts')
    if (contactsFromLS){
      const contacts = JSON.parse(contactsFromLS)
    this.setState({contacts})
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  changeFilter = ({ target: { value } }) => {
    this.setState(() => ({ filter: value }));
  };

  handleAddContact = (contact) => {
    if (!this.isUniqueName(contact)) {
      const newContact = {id: uuidv4(), ...contact };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert(`${contact.name} is already in contacts`)
    }
  };

  isUniqueName = ({ name }) => {
    return this.state.contacts.some((contact) => contact.name === name);
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter onChangeFilter={this.changeFilter} />}
        <ContactsList contacts={filteredContacts} deleteContact={this.handleDelete}/>
      </>
    );
  }
}
