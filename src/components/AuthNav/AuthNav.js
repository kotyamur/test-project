import { Flex} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Flex gap={4}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </Flex>
  );
};
