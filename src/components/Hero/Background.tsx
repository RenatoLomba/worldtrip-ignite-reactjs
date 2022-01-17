import { HStack, Box } from '@chakra-ui/react';
import { FC } from 'react';

const Background: FC = ({ children }) => {
  return (
    <Box
      as="section"
      w="100%"
      h={{ base: '163px', lg: '335px' }}
      backgroundImage="url('/images/background-hero.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      px={{ base: '4' }}
    >
      <HStack
        align="center"
        justify={{ base: 'center', lg: 'space-between' }}
        w="100%"
        h="100%"
        maxWidth="1240px"
        spacing="8"
        mx="auto"
      >
        {children}
      </HStack>
    </Box>
  );
};

export { Background };
