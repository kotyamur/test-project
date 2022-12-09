import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList ';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/Error/Error';
import { fetchContacts } from '../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Box, Heading, Text } from '@chakra-ui/react';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="main" p={8}>
      <ContactForm />

      <Heading as="h2" size="lg" mb={4} pl={4}>
        Contacts
      </Heading>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && contacts.length === 0 && (
        <Text pl={3} fontSize="lg">
          There is no contacts
        </Text>
      )}
      <Loader isLoading={isLoading} />
    </Box>
  );
};

export default Contacts;
