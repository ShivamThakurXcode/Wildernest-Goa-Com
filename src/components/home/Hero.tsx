import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('./Home/hero.webp')`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-white font-display mb-6">
            Experience Nature's Luxury in{" "}
            <span className="text-gradient">Goa</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Discover Wildernest, where modern luxury meets untouched nature. Our
            eco-friendly resort offers a perfect blend of comfort and adventure
            in Goa's most serene landscapes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as={Link}
              to="/book"
              size="lg"
              className="w-full sm:w-auto   bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-gradient-to-tl hover:from-orange-500 hover:to-yellow-500 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Book Your Stay
            </Button>
            <Button
              as={Link}
              to="/accommodation"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto !text-white !border-white hover:!bg-white/10"
            >
              Explore Rooms
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
