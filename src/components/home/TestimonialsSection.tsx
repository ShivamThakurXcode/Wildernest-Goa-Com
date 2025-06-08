import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import Section from "../ui/Section";

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  imageUrl: string;
  delay: number;
}

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "Wilderest exceeded all our expectations. The perfect mix of luxury and nature, with staff that made us feel like family.",
    rating: 5,
    imageUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Raj Mehta",
    location: "Mumbai, India",
    quote:
      "The most rejuvenating weekend getaway! The eco-cabins are beautifully designed and the food was absolutely divine.",
    rating: 5,
    imageUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Emma Clarke",
    location: "London, UK",
    quote:
      "A stunning retreat in Goa, unlike any resort I've visited before. The guided nature walks were the highlight of our trip.",
    rating: 5,
    imageUrl:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const Testimonial = ({
  name,
  location,
  quote,
  rating,
  imageUrl,
  delay,
}: TestimonialProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
            delay: delay * 0.2,
          },
        },
      }}
      className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
    >
      <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-current text-yellow-400" />
        ))}
      </div>
      <p className="italic text-gray-600 dark:text-gray-300 mb-4">"{quote}"</p>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Section className="bg-gradient-to-br  dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-16">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="mb-4"
        >
          Guest <span className="text-gradient">Experiences</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Hear from travelers who have experienced the Wilderest difference. Our
          guests are our best storytellers.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            quote={testimonial.quote}
            rating={testimonial.rating}
            imageUrl={testimonial.imageUrl}
            delay={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
