import { NavLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex gap={4}>
      <NavLink to="/register">
        <Text fontSize="2xl" color="#0041ff">
          Register
        </Text>
      </NavLink>
      <NavLink to="/login">
        <Text fontSize="2xl" color="#0041ff">
          Login
        </Text>
      </NavLink>
    </Flex>
  );
};
