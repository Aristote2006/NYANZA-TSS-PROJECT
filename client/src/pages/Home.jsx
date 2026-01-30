import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionAbout from '../components/home/MissionAbout';
import LeadersPreview from '../components/home/LeadersPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import NewsPreview from '../components/home/NewsPreview';

const Home = () => {
  return (
    <>
      <HeroSection />
      <MissionAbout />
      <LeadersPreview />
      <ProgramsPreview />
      <NewsPreview />
    </>
  );
};

export default Home;