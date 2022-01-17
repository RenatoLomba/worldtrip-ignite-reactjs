import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';
import { TravelTypeItem } from './TravelTypeItem';

const TravelTypes: FC<FlexProps> = ({ ...rest }) => {
  return (
    <Flex
      w="100%"
      as="section"
      justify={{ base: 'center', lg: 'space-between' }}
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      px={{ base: '16' }}
      rowGap={{ base: '6' }}
      columnGap={{ base: '12', lg: '0' }}
      {...rest}
    >
      <TravelTypeItem imgSrc="/images/cocktail.svg" text="vida noturna" />
      <TravelTypeItem imgSrc="/images/surf.svg" text="praia" />
      <TravelTypeItem imgSrc="/images/building.svg" text="moderno" />
      <TravelTypeItem imgSrc="/images/museum.svg" text="clássico" />
      <TravelTypeItem imgSrc="/images/earth.svg" text="e mais..." />
    </Flex>
  );
};

export { TravelTypes };
