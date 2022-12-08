import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Box } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

export const SharedLayout = () => {
  return (
    <Box p={5} maxW="960px" mx="auto">
      <AppBar />
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            color="#0041ff"
            size="xl"
            m={14}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};
