import {
  Box,
  Image,
  Text,
  Flex,
  VStack,
  Skeleton,
  SkeletonCircle,
  Avatar,
} from '@chakra-ui/react';

type CityItemProps = {
  city?: {
    banner_img: string;
    name: string;
    country: string;
    flag_img: string;
  };
  isLoading?: boolean;
};

export function CityItem({ city, isLoading = false }: CityItemProps) {
  return (
    <Box
      w="256px"
      h="279px"
      borderRadius="md"
      overflow="hidden"
      borderWidth="1px"
      borderColor="primary.highlight50"
    >
      <Skeleton isLoaded={!isLoading}>
        <Image src={city?.banner_img} alt={city?.name} h="173px" w="100%" />
      </Skeleton>
      <Flex px="6" py="5">
        <VStack flex="1" align="flex-start">
          {isLoading ? (
            <Skeleton w="75%" h="20px" />
          ) : (
            <Text as="h2" fontSize="xl">
              {city?.name}
            </Text>
          )}

          {isLoading ? (
            <Skeleton w="50%" h="20px" />
          ) : (
            <Text as="h3" fontSize="md">
              {city?.country}
            </Text>
          )}
        </VStack>
        <Flex justify="center" align="center">
          {isLoading ? (
            <SkeletonCircle />
          ) : (
            <Avatar src={city?.flag_img} name={city.name} size="sm" />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
