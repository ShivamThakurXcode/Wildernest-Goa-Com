import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import { useState } from "react";

const images = [
  {
    url: "./Home/4.jpg",
    alt: "Elegant resort room with balcony view",
    caption: "Deluxe suite with private balcony",
    category: "Accommodations",
  },
  {
    url: "./Home/3.jpg",
    alt: "Yoga deck in the forest",
    caption: "Morning yoga in the midst of nature",
    category: "Activities",
  },
  {
    url: "./Home/8.jpg",
    alt: "Beachfront view near the resort",
    caption: "Nearby pristine beaches",
    category: "Surroundings",
  },
  {
    url: "./Home/5.jpg",
    alt: "Luxury spa treatment room",
    caption: "Our rejuvenating spa sanctuary",
    category: "Wellness",
  },
  {
    url: "./Home/4.jpg",
    alt: "Elegant resort room with balcony view",
    caption: "Deluxe suite with private balcony",
    category: "Accommodations",
  },
  {
    url: "./Home/3.jpg",
    alt: "Yoga deck in the forest",
    caption: "Morning yoga in the midst of nature",
    category: "Activities",
  },
  {
    url: "./Home/8.jpg",
    alt: "Beachfront view near the resort",
    caption: "Nearby pristine beaches",
    category: "Surroundings",
  },
  {
    url: "./Home/5.jpg",
    alt: "Luxury spa treatment room",
    caption: "Our rejuvenating spa sanctuary",
    category: "Wellness",
  },
  {
    url: "./Home/4.jpg",
    alt: "Elegant resort room with balcony view",
    caption: "Deluxe suite with private balcony",
    category: "Accommodations",
  },
  {
    url: "./Home/3.jpg",
    alt: "Yoga deck in the forest",
    caption: "Morning yoga in the midst of nature",
    category: "Activities",
  },
  {
    url: "./Home/8.jpg",
    alt: "Beachfront view near the resort",
    caption: "Nearby pristine beaches",
    category: "Surroundings",
  },
  {
    url: "./Home/5.jpg",
    alt: "Luxury spa treatment room",
    caption: "Our rejuvenating spa sanctuary",
    category: "Wellness",
  },
];

// Define categories, excluding "All", "Amenities", and "Dining"
const categories = [...new Set(images.map((img) => img.category))];

const GalleryImage = ({
  url,
  alt,
  caption,
  category,
  delay,
  onSelect,
}: {
  url: string;
  alt: string;
  caption: string;
  category: string;
  delay: number;
  onSelect: () => void;
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
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: delay * 0.1,
          },
        },
      }}
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      onClick={onSelect}
    >
      <img
        src={url}
        alt={alt}
        className="w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-105"
        onError={(e) => (e.target.src = "https://via.placeholder.com/800")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4">
        <span className="self-start px-3 py-1 bg-white/90 text-xs font-medium rounded-full text-gray-800">
          {category}
        </span>
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-lg font-medium">{caption}</p>
          <div className="w-8 h-0.5 bg-amber-400 my-2"></div>
        </div>
      </div>
    </motion.div>
  );
};

const ExpandedImage = ({
  url,
  alt,
  caption,
  category,
  onClose,
}: {
  url: string;
  alt: string;
  caption: string;
  category: string;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-w-6xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={url}
          alt={alt}
          className="w-full h-full object-contain max-h-[80vh]"
          onError={(e) => (e.target.src = "https://via.placeholder.com/800")}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-amber-400 text-sm font-medium">
                {category}
              </span>
              <h3 className="text-white text-xl font-bold">{caption}</h3>
            </div>
            <button className="text-white hover:text-amber-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to first category
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

  const filteredImages = images
    .filter((img) => img.category === activeCategory)
    .slice(0, 3); // Show only 3 images in selected category

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-16">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="mb-4 text-4xl md:text-5xl font-bold"
        >
          Visual <span className="text-gradient">Experience</span>
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
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Immerse yourself in the Wilderest experience through our curated
          collection of moments
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.4 },
          },
        }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={index}
              url={image.url}
              alt={image.alt}
              caption={image.caption}
              category={image.category}
              delay={index % 3}
              onSelect={() => setSelectedImage(index)}
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <ExpandedImage
            url={filteredImages[selectedImage].url}
            alt={filteredImages[selectedImage].alt}
            caption={filteredImages[selectedImage].caption}
            category={filteredImages[selectedImage].category}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 w-full text-center"
      >
        <button className="flex mx-auto items-center justify-center gap-2 bg-orange-500 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm hover:shadow-md">
          Plan Your Trip
          <div className="w-4 h-4" />
        </button>
      </motion.div>
    </Section>
  );
};

export default GallerySection;
