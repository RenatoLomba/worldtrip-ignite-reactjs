import faker from 'faker';
import { Factory } from 'miragejs';

const citiesFactory = Factory.extend({
  name() {
    return faker.address.cityName();
  },
  country() {
    return faker.address.country();
  },
  flagImg() {
    return faker.image.avatar();
  },
  bannerImg() {
    return faker.image.image();
  },
});

export { citiesFactory };
