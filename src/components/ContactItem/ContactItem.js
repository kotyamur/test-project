import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { Container, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Container>
      <p>
        {name}: {phone}
      </p>
      <DeleteButton onClick={() => handleDeleteContact(id)}>
        Delete
      </DeleteButton>
    </Container>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
