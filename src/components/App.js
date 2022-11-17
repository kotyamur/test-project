import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container, Title, SecondTitle } from './App.styled';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../utils';
import { getContacts } from 'redux/selectors';
// import { setContactFromLocalStorage } from 'redux/actions';
import { setContactFromLocalStorage } from '../redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = getDataFromLocalStorage();
    // if (savedContacts.length === 0) {
    //   return;
    // }
    dispatch(setContactFromLocalStorage(savedContacts));
  }, [dispatch]);

  useEffect(() => {
    setDataToLocalStorage(contacts);
  }, [contacts]);

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
