import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Box } from '@chakra-ui/react';
import { Loader } from './Loader/Loader';

export const SharedLayout = () => {
  return (
    <Box p={5} maxW="960px" mx="auto">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
