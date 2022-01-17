import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

const Divider: FC<BoxProps> = ({ ...rest }) => {
  return (
    <Box
      w={{ base: '60px', lg: '90px' }}
      h="2px"
      bgColor="text.dark"
      {...rest}
    />
  );
};

export { Divider };
