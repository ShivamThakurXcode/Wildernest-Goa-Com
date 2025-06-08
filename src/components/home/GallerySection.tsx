import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Section from "../ui/Section";

const images = [
  {
    url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Luxury resort pool surrounded by palm trees",
    caption: "Our infinity pool overlooking the forest",
  },
  {
    url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Elegant resort room with balcony view",
    caption: "Deluxe suite with private balcony",
  },
  {
    url: "https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Outdoor dining area at sunset",
    caption: "Al fresco dining experience",
  },
  {
    url: "https://images.pexels.com/photos/12819896/pexels-photo-12819896.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Yoga deck in the forest",
    caption: "Morning yoga in the midst of nature",
  },
  {
    url: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Beachfront view near the resort",
    caption: "Nearby pristine beaches",
  },
  {
    url: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Luxury spa treatment room",
    caption: "Our rejuvenating spa sanctuary",
  },
];

const GalleryImage = ({
  url,
  alt,
  caption,
  delay,
}: {
  url: string;
  alt: string;
  caption: string;
  delay: number;
}) => {
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
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: delay * 0.1,
          },
        },
      }}
      className="overflow-hidden rounded-2xl group relative"
    >
      <img
        src={url}
        alt={alt}
        className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-4 font-medium">{caption}</p>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
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
    <Section className="bg-cover bg-center bg-[url('/Meteor.svg')]">
      <div className="text-center  mb-16">
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
          Explore Our <span className="text-gradient">Gallery</span>
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
          Take a visual journey through Wilderest and imagine yourself
          surrounded by luxury in the heart of nature.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            url={image.url}
            alt={image.alt}
            caption={image.caption}
            delay={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default GallerySection;
