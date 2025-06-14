import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

// Define types for our gallery image
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Sample gallery images (replace with your actual images)
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/Home/2.jpg",
    alt: "Aerial view of Wilderest Resort nestled in Goan nature",
    category: "resort",
  },
  {
    id: 2,
    src: "/Home/3.jpg",
    alt: "Infinity pool overlooking lush greenery",
    category: "amenities",
  },
  {
    id: 3,
    src: "/Home/4.jpg",
    alt: "Luxury villa with private deck",
    category: "accommodations",
  },
  {
    id: 4,
    src: "/Home/5.jpg",
    alt: "Guest enjoying spa treatment in nature",
    category: "wellness",
  },
  {
    id: 5,
    src: "/Home/6.jpg",
    alt: "Private beach access pathway",
    category: "location",
  },
  {
    id: 6,
    src: "/Home/7.jpg",
    alt: "Romantic sunset dining setup",
    category: "dining",
  },
  {
    id: 7,
    src: "/Home/8.jpg",
    alt: "Morning yoga session in garden",
    category: "activities",
  },
  {
    id: 7,
    src: "/Home/8.jpg",
    alt: "Morning yoga session in garden",
    category: "activities",
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    "all",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction: "prev" | "next") => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Wilderest Nature Resort, Goa</title>
        <meta
          name="description"
          content="Explore the stunning visuals of Wilderest Nature Resort through our gallery showcasing luxurious accommodations, breathtaking landscapes, and unforgettable experiences."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/cta-bg.svg')`,
        }}
        className="relative pt-40 pb-32 bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl text-white font-handwriting mb-2">
              Visual Journey
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-white relative mb-6">
              Resort Gallery
            </h1>
            <p className="text-orange-100 text-lg max-w-3xl mx-auto">
              Discover the beauty of Wilderest through our curated collection of
              images
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize transition-all ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-white text-orange-800 hover:bg-orange-100"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
                onClick={() => openImage(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="p-4 bg-white">
                  <p className="text-orange-800 capitalize">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-3xl hover:text-orange-400 transition-colors"
          >
            <FiX />
          </button>

          <button
            onClick={() => navigate("prev")}
            className="absolute left-6 text-white text-3xl hover:text-orange-400 transition-colors md:left-12"
          >
            <FiChevronLeft size={32} />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-lg">{selectedImage.alt}</p>
              <p className="text-orange-300 capitalize mt-1">
                {selectedImage.category}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("next")}
            className="absolute right-6 text-white text-3xl hover:text-orange-400 transition-colors md:right-12"
          >
            <FiChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
