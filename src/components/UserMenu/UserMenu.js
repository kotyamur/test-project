import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/authOperations';
import { Flex, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex gap={4}>
      <Text fontSize="2xl" color="#0041ff">
        Welcome, {user.name}
      </Text>
      <Button
        colorScheme="messenger"
        size="md"
        variant="solid"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </Flex>
  );
};
