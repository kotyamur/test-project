import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container, Title, SecondTitle } from './App.styled';
import { Loader } from './Loader/Loader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <SecondTitle>Contacts</SecondTitle>
      {error && <p>{error}</p>}
      {contacts.length > 0 && !error && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && !error && contacts.length === 0 && (
        <p>There is no contacts</p>
      )}
      <Loader isLoading={isLoading} />
    </Container>
  );
};
