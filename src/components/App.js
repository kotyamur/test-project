import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container, Title, SecondTitle } from './App.styled';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <SecondTitle>Contacts</SecondTitle>

      {error && <Error>{error}</Error>}
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && contacts.length === 0 && <p>There is no contacts</p>}
      <Loader isLoading={isLoading} />
    </Container>
  );
};
