import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/authOperations';
import { Flex } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex gap={4}>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </Flex>
  );
};
