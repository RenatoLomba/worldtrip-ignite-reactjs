import {
  ActiveModelSerializer,
  belongsTo,
  createServer,
  hasMany,
  Model,
} from 'miragejs';
import { citiesFactory } from './factories/citiesFactory';
import { continentsFactory } from './factories/continentsFactory';

interface Continent {
  slug: string;
  name: string;
  small_description: string;
  description: string;
  countries_count: number;
  languages_count: number;
  cities_count: number;
  banner_img: string;

  cities: unknown;
}

interface City {
  name: string;
  country: string;
  flag_img: string;
  banner_img: string;

  continent: unknown;
  continentId: string;
}

function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      continent: Model.extend<Partial<Continent>>({
        cities: hasMany('city'),
      }),
      city: Model.extend<Partial<City>>({
        continent: belongsTo('continent'),
      }),
    },

    factories: {
      continent: continentsFactory,
      city: citiesFactory,
    },

    seeds(server) {
      server.createList('continent', 6).forEach((continent) => {
        server.createList('city', 5, { continent });
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 2000;

      this.get('/continents');
      this.get('/continents/:slug', function (schema, request) {
        const { slug } = request.params;

        const { continent } = this.serialize(
          schema.findBy('continent', { slug }),
        );
        const { cities } = this.serialize(
          schema.where('city', { continentId: continent.id }),
        );

        continent.cities = cities;

        return { continent };
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}

export { makeServer };
