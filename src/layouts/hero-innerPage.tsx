import { motion } from "framer-motion";

interface HeroBannerProps {
  title: string;
  subTitle: string;
  paragraph: string;
  backgroundImage?: string;
  overlayOpacity?: number;
}

const HeroBanner = ({
  title,
  subTitle,
  paragraph,
  backgroundImage = "./cta-bg.svg",
  overlayOpacity = 0.5,
}: HeroBannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
          overlayOpacity - 0.2
        }), rgba(0, 0, 0, ${overlayOpacity})), url('${backgroundImage}')`,
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
            {subTitle}
          </h3>
          <h1 className="text-5xl md:text-6xl font-bold text-white relative mb-6">
            {title}
          </h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">{paragraph}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
