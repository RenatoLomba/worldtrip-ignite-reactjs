import { useQuery } from 'react-query';
import { api } from '../../services/api';
import { queryClient } from '../../utils/queryClient';

type Continent = {
  id: string;
  name: string;
  slug: string;
  description: string;
  banner_img: string;
  cities_count: number;
  countries_count: number;
  languages_count: number;
  cities: {
    id: string;
    banner_img: string;
    name: string;
    country: string;
    flag_img: string;
  }[];
};

type ContinentResponse = {
  continent: Continent;
};

const getContinent = async (slug: string) => {
  const {
    data: { continent },
  } = await api.get<ContinentResponse>(`continents/${slug}`);

  return { continent };
};

async function prefetchContinent(slug: string) {
  await queryClient.prefetchQuery(
    ['continent', slug],
    () => getContinent(slug),
    { staleTime: 1000 * 60 * 10 },
  );
}

function useContinent(slug?: string) {
  return useQuery(['continent', slug], () => getContinent(slug), {
    staleTime: 1000 * 60 * 10,
  });
}

export { useContinent, prefetchContinent };
