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
        Log In
      </Button>
    </FormControl>
  );
};
