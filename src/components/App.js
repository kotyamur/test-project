import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container, Title, SecondTitle } from './App.styled';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

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
