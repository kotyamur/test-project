import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './ContactForm.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { checkContactsName } from 'utils';
import { addContact } from '../../redux/contacts/operations';
import { Button } from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setPhone(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContactsName(contacts, name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <Button colorScheme="messenger" size="md" variant="solid" type="submit">
        Add contact
      </Button>
      <Toaster />
    </Container>
  );
};
