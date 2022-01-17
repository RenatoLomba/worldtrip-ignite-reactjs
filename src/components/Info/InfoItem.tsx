import { VStack, Text, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

type InfoItemProps = {
  heading: string;
  text: string;
  isLoading?: boolean;
};

export function InfoItem({ heading, text, isLoading = false }: InfoItemProps) {
  return (
    <VStack>
      {isLoading ? (
        <SkeletonCircle />
      ) : (
        <Text
          w="100%"
          lineHeight="7"
          textAlign={{ base: 'left', lg: 'center' }}
          as="h2"
          fontSize={{ base: '2xl', lg: '5xl' }}
          color="primary.highlight"
        >
          {heading}
        </Text>
      )}

      <SkeletonText isLoaded={!isLoading}>
        <Text as="h2" fontSize={{ base: 'lg', lg: '2xl' }}>
          {text}
        </Text>
      </SkeletonText>
    </VStack>
  );
}
