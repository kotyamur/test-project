import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav" gap={4}>
      <NavLink to="/">
        <Text fontSize="2xl" color="#0041ff">
          Home
        </Text>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Text fontSize="2xl" color="#0041ff">
            Contacts
          </Text>
        </NavLink>
      )}
    </Flex>
  );
};
