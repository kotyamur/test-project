import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/user/authOperations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl as="form" w="450px" onSubmit={handleSubmit} autoComplete="off">
      <FormLabel htmlFor="1">Email</FormLabel>
      <Input id="1" type="email" name="email" />
      <FormLabel htmlFor="2">Password</FormLabel>
      <Input id="2" type="password" name="password" />
      <Button
        type="submit"
        colorScheme="messenger"
        size="md"
        variant="solid"
        mt="15px"
        p="15px"
      >
        Log In
      </Button>
    </FormControl>
  );
};
