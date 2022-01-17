import { Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '../components/Container';
import { Divider } from '../components/Divider';
import { Hero } from '../components/Hero';
import { SwiperContinent } from '../components/SwiperContinent';
import { TravelTypes } from '../components/TravelTypes';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <Hero />
      <Container>
        <TravelTypes mb={{ base: '9', lg: '20' }} />

        <Divider mx="auto" />

        <Text
          as="h3"
          fontSize={{ base: 'xl', lg: '4xl' }}
          textAlign="center"
          my={{ base: '6', lg: '14' }}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <SwiperContinent />
      </Container>
    </>
  );
};

export default Home;
