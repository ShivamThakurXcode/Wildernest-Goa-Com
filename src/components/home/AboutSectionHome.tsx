import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Sun, Waves } from "lucide-react";

// Replace with Wilderest's actual solar installation image
const resortSolarImage = "./Home/2.jpg";

const AboutSectionHome = () => {
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
    <section className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center  mb-16">
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
            Take a visual journey
          </motion.p>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Card - Making Everything from Nirosolar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-96 md:h-auto shadow-lg"
          >
            <img
              src={resortSolarImage}
              alt="Wilderest's solar installation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Middle Card - Solar Energy Best Production */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all border border-gray-100/50 dark:border-gray-700/50"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-6">
              <Sun className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Solar Energy Best Production
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Solar energy is the radiant light and heat from the sun, harnessed
              through various technologies to generate electricity or heat. It’s
              a renewable, eco-friendly energy source, reducing carbon
              emissions, cutting costs, and moving us toward sustainability.
            </p>
          </motion.div>

          {/* Right Card - We Are Building Better Future */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all border border-gray-100/50 dark:border-gray-700/50"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-6">
              <Waves className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              We Are Building Better Future
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Solar energy is the radiant light and heat from the sun, harnessed
              through various technologies to generate electricity or heat. It’s
              a renewable, eco-friendly energy source, reducing carbon
              emissions, cutting costs, and moving us toward sustainability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHome;
