import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import GallerySection from "../components/home/GallerySection";
import CTASection from "../components/home/CTASection";
import AboutSectionHome from "../components/home/AboutSectionHome";
import BudgetDesignSection from "../components/home/AccommodationSection";
import ActivitiesIntegration from "../components/home/ActivitiesSection";
import ResortSection from "../components/home/About3SectionHome";
import ResortSectionFirst from "../components/home/About2SectionHome";
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
      <ResortSectionFirst />
      <BudgetDesignSection />
      <ActivitiesIntegration />
      <GallerySection />
      <ResortSection />
      <CTASection />
    </>
  );
};

export default HomePage;
