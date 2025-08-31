import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import HeroBanner from "../layouts/hero-innerPage";

// Define types for our gallery image
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/g1.webp",
    alt: "",
  },
  {
    id: 2,
    src: "/gallery/g2.webp",
    alt: "",
  },
  {
    id: 3,
    src: "/gallery/g3.webp",
    alt: "",
  },
  {
    id: 4,
    src: "/gallery/g4.webp",
    alt: "",
  },
  {
    id: 5,
    src: "/gallery/g5.webp",
    alt: "",
  },
  {
    id: 6,
    src: "/gallery/g6.webp",
    alt: "",
  },
  {
    id: 7,
    src: "/gallery/g7.webp",
    alt: "",
  },
  {
    id: 8,
    src: "/gallery/g8.webp",
    alt: "",
  },
  {
    id: 9,
    src: "/gallery/g9.webp",
    alt: "",
  },
  {
    id: 10,
    src: "/gallery/g10.webp",
    alt: "",
  },
  {
    id: 11,
    src: "/gallery/g11.webp",
    alt: "",
  },
  {
    id: 12,
    src: "/gallery/g12.webp",
    alt: "",
  },
  {
    id: 13,
    src: "/gallery/g13.webp",
    alt: "",
  },
  {
    id: 14,
    src: "/gallery/g14.webp",
    alt: "",
  },
  {
    id: 15,
    src: "/gallery/g15.webp",
    alt: "",
  },
  {
    id: 16,
    src: "/gallery/g16.webp",
    alt: "",
  },
  { id: 17, src: "/gallery/g17.webp", alt: "" },
  {
    id: 18,
    src: "/gallery/g18.webp",
    alt: "",
  },
  {
    id: 19,
    src: "/gallery/g19.webp",
    alt: "",
  },
  {
    id: 20,
    src: "/gallery/g20.webp",
    alt: "",
  },
  {
    id: 21,
    src: "/gallery/g21.webp",
    alt: "",
  },
  {
    id: 22,
    src: "/gallery/g22.webp",
    alt: "",
  },
  {
    id: 23,
    src: "/gallery/g23.webp",
    alt: "",
  },
  {
    id: 24,
    src: "/gallery/g24.webp",
    alt: "",
  },
  {
    id: 25,
    src: "/gallery/g25.webp",
    alt: "",
  },
  {
    id: 26,
    src: "/gallery/g26.webp",
    alt: "",
  },
  {
    id: 27,
    src: "/gallery/g27.webp",
    alt: "",
  },
  {
    id: 28,
    src: "/gallery/g28.webp",
    alt: "",
  },
  {
    id: 29,
    src: "/gallery/g29.webp",
    alt: "",
  },
  {
    id: 30,
    src: "/gallery/g30.webp",
    alt: "",
  },
  {
    id: 31,
    src: "/gallery/g31.webp",
    alt: "",
  },
  {
    id: 32,
    src: "/gallery/g32.webp",
    alt: "",
  },
  {
    id: 33,
    src: "/gallery/g33.webp",
    alt: "",
  },
  {
    id: 34,
    src: "/gallery/g34.webp",
    alt: "",
  },
  {
    id: 35,
    src: "/gallery/g35.webp",
    alt: "",
  },
  {
    id: 36,
    src: "/gallery/g36.webp",
    alt: "",
  },
  {
    id: 37,
    src: "/gallery/g37.webp",
    alt: "",
  },
  {
    id: 38,
    src: "/gallery/g38.webp",
    alt: "",
  },
  {
    id: 39,
    src: "/gallery/g39.webp",
    alt: "",
  },
  {
    id: 40,
    src: "/gallery/g40.webp",
    alt: "",
  },
  {
    id: 41,
    src: "/gallery/g41.webp",
    alt: "",
  },
  {
    id: 42,
    src: "/gallery/g42.webp",
    alt: "",
  },
  {
    id: 43,
    src: "/gallery/g43.webp",
    alt: "",
  },
  {
    id: 44,
    src: "/gallery/g44.webp",
    alt: "",
  },
  {
    id: 45,
    src: "/gallery/g45.webp",
    alt: "",
  },
  {
    id: 46,
    src: "/gallery/g46.webp",
    alt: "",
  },
  {
    id: 47,
    src: "/gallery/g47.webp",
    alt: "",
  },
  {
    id: 48,
    src: "/gallery/g48.webp",
    alt: "",
  },
  {
    id: 49,
    src: "/gallery/g49.webp",
    alt: "",
  },
  {
    id: 50,
    src: "/gallery/g50.webp",
    alt: "",
  },
  {
    id: 51,
    src: "/gallery/g51.webp",
    alt: "",
  },
  {
    id: 52,
    src: "/gallery/g52.webp",
    alt: "",
  },
  {
    id: 53,
    src: "/gallery/g53.webp",
    alt: "",
  },
  {
    id: 54,
    src: "/gallery/g54.webp",
    alt: "",
  },
  {
    id: 55,
    src: "/gallery/g55.webp",
    alt: "",
  },
  {
    id: 56,
    src: "/gallery/g56.webp",
    alt: "",
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      newIndex = (currentIndex + 1) % galleryImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
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
      <HeroBanner
        subTitle="Wilderest Nature Resort"
        title="Gallery"
        paragraph="Browse our gallery and imagine yourself at Wilderest Nature Resort. Book now to transform inspiring moments into your own unforgettable Goa adventure."
      />

      {/* Gallery Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
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
                Image {currentIndex + 1} of {galleryImages.length}
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
