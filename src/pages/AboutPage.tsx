import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Section from "../components/ui/Section";

const AboutPage = () => {
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
    <>
      <Helmet>
        <title>About Us | Wilderest Nature Resort</title>
        <meta
          name="description"
          content="Learn about Wilderest Nature Resort's story, philosophy, and commitment to sustainable luxury tourism in Goa, India."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('./hero-dark.svg')`,
        }}
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center "
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">About Wilderest</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Our story, our mission, and our commitment to sustainable luxury.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="mb-4">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Wilderest was born from a vision to create a sanctuary where
              modern comfort meets untouched nature. Founded in 2018 by a team
              of environmentalists and hospitality experts, we set out to
              redefine eco-tourism in Goa's lush landscapes.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our journey began with a commitment to preserve the natural beauty
              of our location while offering guests an unparalleled luxury
              experience. We carefully designed each aspect of our resort to
              harmonize with the surrounding environment.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Today, Wilderest stands as a testament to sustainable luxury,
              where every stay contributes to conservation efforts and supports
              the local community.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wilderest resort view"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Our Mission Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            At Wilderest, we believe in responsible tourism that preserves and
            celebrates nature. Our mission is to provide extraordinary
            experiences that inspire guests to connect with the environment
            while enjoying modern luxury and comfort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We minimize our ecological footprint through renewable energy
                and waste reduction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Local Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We support local artisans and employ residents to give back to
                the community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 2a3 3 0 0 0-3 3c0 1.6.8 3 2 4l-2 7H9a3 3 0 0 0-3 3v1h12v-1a3 3 0 0 0-3-3h0l-2-7c1.2-1 2-2.4 2-4a3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Exceptional Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive to provide personalized experiences that create
                lasting memories.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The passionate individuals behind Wilderest who work tirelessly to
            ensure your stay is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Priya Sharma",
              role: "Founder & Director",
              image:
                "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300",
            },
            {
              name: "Michael Costa",
              role: "Head of Sustainability",
              image:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
            },
            {
              name: "Anika Patel",
              role: "Guest Experience Manager",
              image:
                "https://images.pexels.com/photos/3760819/pexels-photo-3760819.jpeg?auto=compress&cs=tinysrgb&w=300",
            },
            {
              name: "Rahul Nair",
              role: "Head Chef",
              image:
                "https://images.pexels.com/photos/4252140/pexels-photo-4252140.jpeg?auto=compress&cs=tinysrgb&w=300",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2 * index, duration: 0.5 },
                },
              }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary-100 dark:border-primary-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
