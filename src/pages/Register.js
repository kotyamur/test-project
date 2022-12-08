import { Box } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <Box as="main" p={8}>
      <RegisterForm />
    </Box>
  );
};

export default Register;
