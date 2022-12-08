import { Link } from './AuthNav.styled';
import { Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex gap={4}>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Log in</Link>
    </Flex>
  );
};
