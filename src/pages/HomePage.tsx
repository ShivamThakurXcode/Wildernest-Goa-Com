import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import ResortSection from "../components/home/About3SectionHome";
import ResortSectionFirst from "../components/home/About2SectionHome";
import ResortHighlights from "../components/home/ResortHighlights";
import AdventureIdeasSection from "../components/home/AdventureIdeasSection";
import JourneyTimeline from "../components/home/TimeLine";
import AccommodationSection from "../components/home/AccommodationSection";
import FeatureSection from "../components/home/FeaturesSection";
import Chatbot from "../components/chatbot";
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
      <Chatbot />
      <Hero />
      <ResortHighlights />
      <AdventureIdeasSection />
      <ResortSectionFirst />
      <JourneyTimeline />
      <AccommodationSection />
      <FeatureSection />
      <ResortSection />
    </>
  );
};

export default HomePage;
