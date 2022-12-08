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
      <FormLabel htmlFor="name">Username</FormLabel>
      <Input id="name" type="text" name="name" mb={3} />

      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" type="email" name="email" mb={3} />

      <FormLabel htmlFor="password">Password</FormLabel>
      <Input id="password" type="password" name="password" mb={3} />

      <Button
        type="submit"
        colorScheme="messenger"
        size="md"
        variant="solid"
        mt="15px"
        p="15px"
      >
        Sign Up
      </Button>
    </FormControl>
  );
};
