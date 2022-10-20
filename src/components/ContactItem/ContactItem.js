import PropTypes from 'prop-types';
import { Container, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <Container>
    <p>
      {name}: {number}
    </p>
    <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
  </Container>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
