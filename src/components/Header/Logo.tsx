import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

const Logo: FC<ImageProps> = ({ ...rest }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      w={{ base: '81px', lg: '184.06px' }}
      h={{ base: '20px', lg: '45.92px' }}
      {...rest}
    />
  );
};

export { Logo };
