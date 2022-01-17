import { useQuery } from 'react-query';
import { api } from '../../services/api';

type Continent = {
  id: string;
  name: string;
  slug: string;
  small_description: string;
  banner_img: string;
};

type ContinentsResponse = {
  continents: Continent[];
};

const getContinents = async () => {
  const {
    data: { continents },
  } = await api.get<ContinentsResponse>('continents');

  return { continents };
};

function useContinents() {
  return useQuery('continents', getContinents, {
    staleTime: 1000 * 60 * 10,
  });
}

export { useContinents };
