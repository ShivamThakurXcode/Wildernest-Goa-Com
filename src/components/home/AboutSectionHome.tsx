import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Palmtree, Umbrella } from "lucide-react";

// Replace with Wilderest's actual resort image
const resortImage = "./Home/2.jpg";

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
        <div className="text-center mb-16">
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
            Discover the magic of Goa
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
            Experience <span className="text-gradient">Wilderest</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Card - Resort Image */}
          <div className="relative rounded-2xl overflow-hidden h-96 md:h-auto shadow-lg">
            <img
              src={resortImage}
              alt="Wilderest Resort Goa beachfront view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Card - Luxury Accommodation */}
          <div className="bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all border border-gray-100/50 dark:border-gray-700/50">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-6">
              <Umbrella className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Luxury Beachfront Villas
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Our private villas blend contemporary luxury with traditional Goan
              architecture. Each features a private plunge pool, sun deck, and
              breathtaking ocean views. Wake up to the sound of waves and enjoy
              bespoke services tailored to your every need.
            </p>
          </div>

          {/* Right Card - Sustainable Tourism */}
          <div className="bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all border border-gray-100/50 dark:border-gray-700/50">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-6">
              <Palmtree className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Sustainable Paradise
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Wilderest is committed to eco-conscious hospitality. We use solar
              energy, recycle 90% of our waste, and support local communities.
              Our organic spa uses indigenous ingredients, and our restaurants
              serve farm-to-table cuisine with ingredients from our own gardens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHome;
