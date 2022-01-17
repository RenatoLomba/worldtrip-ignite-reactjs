import { FC } from 'react';
import NextLink from 'next/link';
import { VStack, Text, Link, Spinner } from '@chakra-ui/react';

import { prefetchContinent } from '../../hooks/continents/useContinent';
import { SwiperContinentBackground } from './SwiperContinentBackground';

type Continent = {
  name: string;
  slug: string;
  small_description: string;
  banner_img: string;
};

type SwiperContinentItemProps = {
  continent: Continent;
  isFetching?: boolean;
};

let prefetchTimeout: NodeJS.Timeout = null;

const SwiperContinentItem: FC<SwiperContinentItemProps> = ({
  continent,
  isFetching = false,
}) => {
  const handleOnMouseEnter = () => {
    prefetchTimeout = setTimeout(() => prefetchContinent(continent.slug), 2000);
  };

  const handleOnMouseLeave = () => {
    clearTimeout(prefetchTimeout);
  };

  return (
    <NextLink href={`/continents/${continent.slug}`} passHref>
      <Link
        _hover={{ textDecoration: 'none' }}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <SwiperContinentBackground imgUrl={continent.banner_img}>
          <VStack>
            <Text
              as="h1"
              fontSize={{ base: '2xl', lg: '5xl' }}
              color="text.light"
            >
              {continent.name}
            </Text>
            <Text
              as="h1"
              fontSize={{ base: 'sm', lg: '2xl' }}
              color="text.light"
            >
              {continent.small_description}
            </Text>
          </VStack>

          {isFetching && (
            <Spinner
              color="info.dark"
              size="md"
              position="absolute"
              right="6"
              bottom="6"
            />
          )}
        </SwiperContinentBackground>
      </Link>
    </NextLink>
  );
};

export { SwiperContinentItem };
