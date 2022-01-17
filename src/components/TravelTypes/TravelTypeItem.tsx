import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useIsWideVersion } from '../../hooks/useIsWideVersion';

type TravelTypeItemProps = {
  imgSrc: string;
  text: string;
};

const TravelTypeItem: FC<TravelTypeItemProps> = ({ imgSrc, text }) => {
  const isWideVersion = useIsWideVersion();

  return (
    <Stack
      direction={{ base: 'row', lg: 'column' }}
      spacing={{ base: 2, lg: 6 }}
      align="center"
      wrap="wrap"
    >
      {isWideVersion ? (
        <Image src={imgSrc} w="85px" h="85px" />
      ) : (
        <Box w="2" h="2" borderRadius="full" bgColor="primary.highlight" />
      )}
      <Text as="h2" textAlign="center" fontSize={{ base: 'lg', lg: '2xl' }}>
        {text}
      </Text>
    </Stack>
  );
};

export { TravelTypeItem };
