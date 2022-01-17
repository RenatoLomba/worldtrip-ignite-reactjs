import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

type SwiperContinentBackgroundProps = {
  imgUrl: string;
};

const SwiperContinentBackground: FC<SwiperContinentBackgroundProps> = ({
  imgUrl,
  children,
}) => {
  return (
    <Flex
      maxWidth="1240px"
      h={{ base: '250px', lg: '450px' }}
      backgroundImage={`url('${imgUrl}')`}
      backgroundPosition="center"
      backgroundSize="cover"
      justify="center"
      align="center"
      position="relative"
    >
      {children}
    </Flex>
  );
};

export { SwiperContinentBackground };
