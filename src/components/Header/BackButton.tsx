import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button, ButtonProps, Image } from '@chakra-ui/react';

const BackButton: FC<ButtonProps> = ({ ...rest }) => {
  const router = useRouter();

  const onClick = () => router.back();

  return (
    <Button
      onClick={onClick}
      bg="transparent"
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'text.light' }}
      _focus={{ outline: 0 }}
      {...rest}
    >
      <Image
        src="/images/chevron-left.svg"
        alt="Voltar"
        w={{ base: '1', lg: '2' }}
        h={{ base: '2', lg: '4' }}
      />
    </Button>
  );
};

export { BackButton };
