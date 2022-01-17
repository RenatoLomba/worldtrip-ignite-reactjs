import { Flex, Text } from '@chakra-ui/react';

type ContinentBannerProps = {
  imgUrl: string;
  title: string;
};

function ContinentBanner({ imgUrl, title }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={{ base: '150px', lg: '500px' }}
      backgroundImage={imgUrl}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      justify={{ base: 'center', lg: 'flex-start' }}
      align={{ base: 'center', lg: 'flex-end' }}
      py="59px"
      px="4"
    >
      <Text
        textAlign={{ base: 'center', lg: 'start' }}
        maxWidth="1240px"
        w="100%"
        mx="auto"
        as="h2"
        fontSize={{ base: '3xl', lg: '5xl' }}
        color="text.light"
      >
        {title}
      </Text>
    </Flex>
  );
}

export { ContinentBanner };
