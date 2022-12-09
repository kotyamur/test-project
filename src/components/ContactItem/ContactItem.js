import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Container } from './ContactItem.styled';
import { Button } from '@chakra-ui/react';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Container>
      <p>
        {name}: {number}
      </p>
      <Button
        colorScheme="messenger"
        size="sm"
        variant="solid"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </Button>
    </Container>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
