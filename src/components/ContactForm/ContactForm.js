import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, SubmitButton } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { checkContactsName } from 'utils';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setPhone(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContactsName(contacts, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone }));
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
          value={phone}
          onChange={handleChangeNumber}
        />
      </label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Container>
  );
};
