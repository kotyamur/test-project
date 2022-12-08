import { useAuth } from 'hooks/useAuth';
import { Flex } from '@chakra-ui/react';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav" gap={4}>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Flex>
  );
};
