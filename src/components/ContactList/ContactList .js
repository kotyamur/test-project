import { useSelector } from 'react-redux';
import { getContacts, getFilteredName } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { Container } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredName);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Container>
  );
};
