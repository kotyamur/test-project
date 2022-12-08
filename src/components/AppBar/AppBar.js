import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Flex, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="header"
      alignItems="center"
      borderBottom="1px solid #2a363b"
      padding={4}
      mb={4}
    >
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
