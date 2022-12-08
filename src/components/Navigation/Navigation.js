import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav" gap={4}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Flex>
  );
};
