import { Box, Flex, Text } from '@chakra-ui/react';
import { CityItem } from './CityItem';

type CitiesListProps = {
  cities?: {
    id: string;
    banner_img: string;
    name: string;
    country: string;
    flag_img: string;
  }[];
  isLoading?: boolean;
};

export function CitiesList({ cities, isLoading = false }: CitiesListProps) {
  return (
    <Box as="section" w="100%" mt="20">
      <Text as="h3" fontSize={{ base: '2xl', lg: '4xl' }} mb="10">
        Cidades +100
      </Text>

      <Flex
        // flexDir={{ base: 'column', lg: 'row' }}
        justify={{ base: 'center', lg: 'flex-start' }}
        w="100%"
        gap="10"
        flexWrap="wrap"
      >
        {isLoading ? (
          <CityItem isLoading />
        ) : (
          cities?.map((city) => <CityItem city={city} key={city.id} />)
        )}
      </Flex>
    </Box>
  );
}
