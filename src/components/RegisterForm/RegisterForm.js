import { useDispatch } from 'react-redux';
import { register } from '../../redux/user/authOperations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl as="form" w="450px" onSubmit={handleSubmit} autoComplete="off">
      <FormLabel htmlFor="1">Username</FormLabel>
      <Input id="1" type="text" name="name" />

      <FormLabel htmlFor="2">Email</FormLabel>
      <Input id="2" type="email" name="email" />

      <FormLabel htmlFor="3">Password</FormLabel>
      <Input id="3" type="password" name="password" />

      <Button type="submit" variant="solid" mt="15px" p="15px">
        Sign Up
      </Button>
    </FormControl>
  );
};
