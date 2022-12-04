// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList ';
// import { Container, Title, SecondTitle } from './App.styled';
// import { Loader } from './Loader/Loader';
// import { Error } from './Error/Error';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/operations';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from '../pages/Contacts';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { SharedLayout } from './SharedLayout';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
    // <Container>
    //   <Title>Phonebook</Title>
    //   <ContactForm />

    //   <SecondTitle>Contacts</SecondTitle>

    //   {error && <Error>{error}</Error>}
    //   {contacts.length > 0 && (
    //     <>
    //       <Filter />
    //       <ContactList />
    //     </>
    //   )}
    //   {!isLoading && contacts.length === 0 && <p>There is no contacts</p>}
    //   <Loader isLoading={isLoading} />
    // </Container>
  );
};
