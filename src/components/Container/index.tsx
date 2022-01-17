import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

type ContainerProps = BoxProps;

const Container: FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <Box
      as="main"
      w="100%"
      pt={{ base: '9', lg: '20' }}
      pb="10"
      maxWidth="1240px"
      mx="auto"
      {...rest}
    >
      {children}
    </Box>
  );
};

export { Container };
