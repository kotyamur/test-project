import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { Container, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  
  return (
    <Container>
      <p>
        {name}: {number}
      </p>
      <DeleteButton onClick={() => handleDeleteContact(id)}>
        Delete
      </DeleteButton>
    </Container>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
