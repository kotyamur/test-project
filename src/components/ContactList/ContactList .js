import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { Container } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Container>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Container>
  );
};
