import { HStack } from '@chakra-ui/react';
import { InfoItem } from './InfoItem';

type InfoProps = {
  countriesCount: number;
  languagesCount: number;
  citiesCount: number;
  isLoading?: boolean;
};

export function Info({
  citiesCount,
  countriesCount,
  languagesCount,
  isLoading = false,
}: InfoProps) {
  return (
    <HStack justify={{ base: 'space-around', lg: 'space-between' }} w="100%">
      <InfoItem
        isLoading={isLoading}
        heading={String(countriesCount)}
        text="países"
      />
      <InfoItem
        isLoading={isLoading}
        heading={String(languagesCount)}
        text="línguas"
      />
      <InfoItem
        isLoading={isLoading}
        heading={String(citiesCount)}
        text="cidades +100"
      />
    </HStack>
  );
}
