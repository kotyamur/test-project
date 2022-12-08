import { Box } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <Box as="main" p={8}>
      <LoginForm />
    </Box>
  );
};

export default Login;
