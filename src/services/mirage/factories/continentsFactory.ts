import faker from 'faker';
import { Factory } from 'miragejs';

const continents = [
  'América do Norte',
  'América do Sul',
  'Ásia',
  'África',
  'Europa',
  'Oceania',
];

const continentsFactory = Factory.extend({
  slug(i) {
    return continents[i]
      ?.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replaceAll(' ', '-')
      .toLowerCase();
  },
  name(i) {
    return continents[i];
  },
  smallDescription() {
    return faker.lorem.sentence(4);
  },
  description() {
    return faker.lorem.paragraph();
  },
  countriesCount() {
    return faker.datatype.number(100);
  },
  languagesCount() {
    return faker.datatype.number(100);
  },
  citiesCount() {
    return faker.datatype.number(100);
  },
  bannerImg() {
    return faker.image.image();
  },
});

export { continentsFactory };
