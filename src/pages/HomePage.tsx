import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import CTASection from '../components/home/CTASection';

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
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;