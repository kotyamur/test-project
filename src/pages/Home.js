import { Box, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box as="main" p={14}>
      <Heading
        as="h1"
        bgGradient="linear(to-l, #98ff8c, #0041ff)"
        bgClip="text"
        textAlign="center"
        size="4xl"
        p={4}
      >
        Welcome to your Phonebook
      </Heading>
    </Box>
  );
};

export default Home;
