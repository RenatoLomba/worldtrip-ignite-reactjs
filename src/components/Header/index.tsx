import { FC } from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { BackButton } from './BackButton';

const Header: FC = () => {
  const router = useRouter();
  const showBackButton = router.asPath !== '/';

  return (
    <Flex
      as="header"
      w="100%"
      h={{ base: '50px', lg: '100px' }}
      bgColor="white"
      align="center"
    >
      <Flex as="nav" w="100%" maxWidth="1240px" mx="auto" align="center">
        {showBackButton && <BackButton />}
        <Logo
          mx="auto"
          transform={showBackButton ? 'translateX(-40px)' : 'none'}
        />
      </Flex>
    </Flex>
  );
};

export { Header };
