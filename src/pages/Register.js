import { Box } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <Box as="main" p={8}>
      <RegisterForm />
    </Box>
  );
};
