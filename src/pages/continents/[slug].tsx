import { Flex, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { CitiesList } from '../../components/CitiesList';
import { Container } from '../../components/Container';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Info } from '../../components/Info';
import { useContinent } from '../../hooks/continents/useContinent';

function ContinentPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading } = useContinent(String(slug));

  return (
    <>
      <Head>
        <title>{data?.continent.name} | worldtrip</title>
      </Head>
      <Skeleton isLoaded={!isLoading}>
        <ContinentBanner
          imgUrl={data?.continent.banner_img}
          title={data?.continent.name}
        />
      </Skeleton>
      <Container px="4" pt={{ base: '4', lg: '20' }}>
        <Flex
          w="100%"
          justify="space-between"
          gap="10"
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <SkeletonText isLoaded={!isLoading} colorScheme="red" w="100%">
            <Text
              textAlign="justify"
              fontSize={{ base: 'sm', lg: '2xl' }}
              maxWidth={{ lg: '600px' }}
            >
              {data?.continent.description}
            </Text>
          </SkeletonText>
          <Flex align="center" maxWidth={{ lg: '490px' }} w="100%">
            <Info
              isLoading={isLoading}
              citiesCount={data?.continent.cities_count}
              countriesCount={data?.continent.countries_count}
              languagesCount={data?.continent.languages_count}
            />
          </Flex>
        </Flex>

        <CitiesList cities={data?.continent.cities} isLoading={isLoading} />
      </Container>
    </>
  );
}

export default ContinentPage;
