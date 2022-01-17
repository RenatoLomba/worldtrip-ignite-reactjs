import { FC } from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { Background } from './Background';
import { useIsWideVersion } from '../../hooks/useIsWideVersion';

const Hero: FC = () => {
  const isWideVersion = useIsWideVersion();

  return (
    <Background>
      <VStack
        as="section"
        maxWidth={{ lg: '524px' }}
        spacing={{ base: '2', lg: '5' }}
      >
        <Text as="h3" color="text.light" fontSize={{ base: 'xl', lg: '4xl' }}>
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text color="info.light" fontSize={{ sm: 'sm', lg: 'xl' }}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>

      {isWideVersion && (
        <Box as="section" maxWidth="524px">
          <Image
            src="/images/airplane.svg"
            alt="Airplane"
            w="417.15px"
            h="270.74px"
            transform="translateY(65px)"
          />
        </Box>
      )}
    </Background>
  );
};

export { Hero };
