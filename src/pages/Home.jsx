import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import OurClassesSection from '../components/OurClassesSection';
import RegistrationBannerSection from '../components/RegistrationBannerSection';
import PricingSection from '../components/PricingSection';
import GallerySection from '../components/GallerySection';
import TeamSection from '../components/TeamSection';
import GetInTouchSection from '../components/GetInTouchSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <OurClassesSection />
      <RegistrationBannerSection />
      <PricingSection />
      <GallerySection />
      <TeamSection />
      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default Home;
