import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { Container } from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => (
  <Container>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
        id={id}
      />
    ))}
  </Container>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
