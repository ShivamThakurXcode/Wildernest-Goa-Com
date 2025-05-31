import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Map, Leaf, Utensils, Wifi, Users, Star } from 'lucide-react';
import Section from '../ui/Section';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: delay * 0.1 
          }
        }
      }}
      className="card p-6 hover:scale-105 transition-transform duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
        <div className="text-primary-600 dark:text-primary-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf size={24} />,
      title: "Eco-Friendly Accommodation",
      description: "Sustainable luxury with minimal environmental impact. Our accommodations are built using eco-friendly materials and practices."
    },
    {
      icon: <Map size={24} />,
      title: "Guided Nature Trails",
      description: "Explore the surrounding forests, beaches, and wildlife with our expert local guides who know every hidden gem."
    },
    {
      icon: <Utensils size={24} />,
      title: "Farm-to-Table Dining",
      description: "Enjoy fresh, organic meals prepared from locally-sourced ingredients from our own garden and nearby farms."
    },
    {
      icon: <Wifi size={24} />,
      title: "Modern Amenities",
      description: "Stay connected with high-speed WiFi, smart room controls, and all modern conveniences in a natural setting."
    },
    {
      icon: <Users size={24} />,
      title: "Community Experiences",
      description: "Engage with local culture through workshops, performances, and activities that support the community."
    },
    {
      icon: <Star size={24} />,
      title: "Personalized Service",
      description: "Receive attentive, customized service from our staff who ensure your stay exceeds expectations."
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="mb-4"
        >
          Experience <span className="text-gradient">Natural Luxury</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
          }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          At Wilderest, we combine the serenity of nature with the comfort of luxury amenities.
          Discover what makes our resort special.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default FeaturesSection;