import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  {
    url: "./Home/4.jpg",
    alt: "Luxury suite with private pool",
    caption: "Ocean View Pool Villa",
  },
  {
    url: "./Home/3.jpg",
    alt: "Sunrise yoga session",
    caption: "Beachfront Yoga Pavilion",
  },
  {
    url: "./Home/8.jpg",
    alt: "Private beach cabana",
    caption: "Exclusive Beach Access",
  },
  {
    url: "./Home/5.jpg",
    alt: "Ayurvedic spa treatment",
    caption: "Ayurvedic Spa Sanctuary",
  },
  {
    url: "./Home/4.jpg",
    alt: "Fine dining restaurant",
    caption: "Gourmet Dining Experience",
  },
  {
    url: "./Home/3.jpg",
    alt: "Infinity pool at sunset",
    caption: "Clifftop Infinity Pool",
  },
  {
    url: "./Home/4.jpg",
    alt: "Luxury suite with private pool",
    caption: "Ocean View Pool Villa",
  },
  {
    url: "./Home/3.jpg",
    alt: "Sunrise yoga session",
    caption: "Beachfront Yoga Pavilion",
  },
  {
    url: "./Home/8.jpg",
    alt: "Private beach cabana",
    caption: "Exclusive Beach Access",
  },
  {
    url: "./Home/5.jpg",
    alt: "Ayurvedic spa treatment",
    caption: "Ayurvedic Spa Sanctuary",
  },
  {
    url: "./Home/4.jpg",
    alt: "Fine dining restaurant",
    caption: "Gourmet Dining Experience",
  },
  {
    url: "./Home/3.jpg",
    alt: "Infinity pool at sunset",
    caption: "Clifftop Infinity Pool",
  },
  {
    url: "./Home/4.jpg",
    alt: "Luxury suite with private pool",
    caption: "Ocean View Pool Villa",
  },
  {
    url: "./Home/3.jpg",
    alt: "Sunrise yoga session",
    caption: "Beachfront Yoga Pavilion",
  },
  {
    url: "./Home/8.jpg",
    alt: "Private beach cabana",
    caption: "Exclusive Beach Access",
  },
  {
    url: "./Home/5.jpg",
    alt: "Ayurvedic spa treatment",
    caption: "Ayurvedic Spa Sanctuary",
  },
  {
    url: "./Home/4.jpg",
    alt: "Fine dining restaurant",
    caption: "Gourmet Dining Experience",
  },
  {
    url: "./Home/3.jpg",
    alt: "Infinity pool at sunset",
    caption: "Clifftop Infinity Pool",
  },
];

const GalleryImage = ({
  url,
  alt,
  caption,
  onSelect,
}: {
  url: string;
  alt: string;
  caption: string;
  onSelect: () => void;
}) => (
  <div className="relative group cursor-pointer w-80 h-52" onClick={onSelect}>
    <div className="w-full h-full overflow-hidden rounded-xl">
      <img
        src={url}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        onError={(e) =>
          (e.currentTarget.src = "https://via.placeholder.com/800")
        }
      />
    </div>
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4 rounded-xl">
      <div className="text-white">
        <h3 className="text-lg font-semibold">{caption}</h3>
        <div className="flex items-center gap-1 text-sm text-white/80">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
);

const MarqueeImages = ({ onSelect }: { onSelect: (index: number) => void }) => {
  const duplicated = [...images, ...images];

  return (
    <div className="relative h-[450px] w-full overflow-hidden space-y-10">
      {/* Layer 1: Scroll Left */}
      <div className="absolute w-full top-0 h-1/2">
        <motion.div
          className="absolute flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
        >
          {duplicated.map((img, i) => (
            <GalleryImage
              key={`layer1-${i}`}
              url={img.url}
              alt={img.alt}
              caption={img.caption}
              onSelect={() => onSelect(i % images.length)}
            />
          ))}
        </motion.div>
      </div>

      {/* Layer 2: Scroll Right */}
      <div className="absolute w-full bottom-0 h-1/2">
        <motion.div
          className="absolute flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
        >
          {duplicated.map((img, i) => (
            <GalleryImage
              key={`layer2-${i}`}
              url={img.url}
              alt={img.alt}
              caption={img.caption}
              onSelect={() => onSelect(i % images.length)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ExpandedView = ({
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
  >
    <button
      onClick={onClose}
      className="absolute top-6 right-6 text-white hover:text-yellow-400 p-2 rounded-full bg-black/30"
    >
      <X className="h-8 w-8" />
    </button>
    <button
      onClick={onPrev}
      className="absolute left-6 text-white hover:text-yellow-400 p-3 rounded-full bg-black/30"
    >
      <ChevronLeft className="h-8 w-8" />
    </button>
    <button
      onClick={onNext}
      className="absolute right-6 text-white hover:text-yellow-400 p-3 rounded-full bg-black/30"
    >
      <ChevronRight className="h-8 w-8" />
    </button>

    <div className="w-full max-w-5xl">
      <motion.img
        key={currentIndex}
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full max-h-[70vh] object-contain rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div className="mt-4 text-white text-center">
        <h3 className="text-2xl font-semibold">
          {images[currentIndex].caption}
        </h3>
        <p className="text-sm opacity-70 mt-1">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  </motion.div>
);

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev || 0) + 1
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev || 0) - 1
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="text-center mb-16">
        <h2 className="mb-4">
          Explore <span className="text-gradient">gallery</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nesciunt
          a
        </p>
      </div>

      <MarqueeImages onSelect={(index) => setSelectedIndex(index)} />

      <AnimatePresence>
        {selectedIndex !== null && (
          <ExpandedView
            currentIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
