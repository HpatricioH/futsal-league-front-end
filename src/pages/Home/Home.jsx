import AboutUs from '../../components/AboutUs/AboutUs';
import Hero from '../../components/Hero/Hero';
import HomePlayers from '../../components/HomePlayers/HomePlayers';
import Ourteam from '../../components/Ourteam/Ourteam';

import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <main className="px-4 sm:p-6 2xl:px-1">
        <HomePlayers />
        <AboutUs />
        <Ourteam />
      </main>
    </>
  );
};

export default Home;
