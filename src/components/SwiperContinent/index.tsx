import { Flex, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useContinents } from '../../hooks/continents/useContinents';
import { SwiperContinentItem } from './SwiperContinentItem';

const SwiperContinent: FC = () => {
  const { data, isLoading, isFetching } = useContinents();

  if (isLoading) {
    return (
      <Flex justify="center" align="center">
        <Spinner color="primary.highlight" size="xl" />
      </Flex>
    );
  }

  return (
    <>
      {data?.continents?.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {data?.continents?.map((continent) => (
            <SwiperSlide key={continent.id}>
              <SwiperContinentItem
                continent={continent}
                isFetching={isFetching}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export { SwiperContinent };
