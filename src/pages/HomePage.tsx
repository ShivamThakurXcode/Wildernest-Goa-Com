import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import TestimonialsSection from "../components/home/TestimonialsSection";
import GallerySection from "../components/home/GallerySection";
import CTASection from "../components/home/CTASection";
import AboutSectionHome from "../components/home/AboutSectionHome";
import SolarEnergySection from "../components/home/About2SectionHome";
import BudgetDesignSection from "../components/home/AccommodationSection";
import ActivitiesSection from "../components/home/ActSection";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Wilderest Nature Resort | Luxury Eco-Tourism in Goa</title>
        <meta
          name="description"
          content="Experience luxury eco-tourism at Wilderest Nature Resort in Goa, India. Book your stay in our beautiful accommodations surrounded by nature."
        />
      </Helmet>

      <Hero />
      <AboutSectionHome />
      <SolarEnergySection />
      <BudgetDesignSection />
      <ActivitiesSection />

      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
