import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container, Title, SecondTitle } from './App.styled';
import {
  checkContactsName,
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from './utils';

export const App = () => {
  const [contacts, setContacts] = useState(() => getDataFromLocalStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setDataToLocalStorage(contacts);
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (name, number) => {
    if (checkContactsName(contacts, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleAddContact} />

      <SecondTitle>Contacts</SecondTitle>
      {contacts.length > 0 && (
        <>
          <Filter value={filter} onChange={handleChangeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </>
      )}
      {contacts.length === 0 && <p>There is no contacts</p>}
    </Container>
  );
};
