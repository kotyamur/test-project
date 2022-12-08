import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Box } from '@chakra-ui/react';

export const SharedLayout = () => {
  return (
    <Box p={5} maxW="960px" mx="auto">
      <AppBar />
      <Outlet />
    </Box>
  );
};
