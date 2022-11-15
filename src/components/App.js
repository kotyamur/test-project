// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container, Title, SecondTitle } from './App.styled';
// import {
//   checkContactsName,
//   getDataFromLocalStorage,
//   setDataToLocalStorage,
// } from '../utils';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   const savedContacts = getDataFromLocalStorage();
  //   if (savedContacts.length === 0) {
  //     return;
  //   }
  //   setContacts(savedContacts);
  // }, []);

  // useEffect(() => {
  //   setDataToLocalStorage(contacts);
  // }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <SecondTitle>Contacts</SecondTitle>
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {contacts.length === 0 && <p>There is no contacts</p>}
    </Container>
  );
};
