import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Leaf, Star, ArrowRight } from "lucide-react";
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
          content="Discover Wilderest Nature Resort's commitment to sustainable luxury in Goa. Learn about our story, philosophy, and dedication to eco-friendly hospitality."
        />
        <meta property="og:title" content="About Wilderest Nature Resort" />
        <meta
          property="og:description"
          content="Goa's premier sustainable luxury resort blending nature and comfort"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('./cta-bg.svg')`,
        }}
        className="relative pt-40 pb-32 bg-cover bg-center bg-[url('./cta-bg.svg')] "
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl text-white font-handwriting mb-2">
              Discover our essence
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-white relative mb-6">
              About Wilderest
            </h1>
            <p className="text-gray-100 text-lg max-w-3xl mx-auto">
              Where sustainable luxury meets Goa's untouched beauty
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-10 pt-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="text-center mb-20">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Our beginnings
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Our Story
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Journey
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            From a visionary idea to Goa's most celebrated eco-resort, our
            journey has been one of passion and purpose.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Image Section */}
            <div className="relative rounded-3xl overflow-hidden h-full shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <img
                src="./Home/hero.png"
                alt="Wilderest Resort luxury villas surrounded by nature"
                className="w-full h-full object-cover bg-cover bg-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Eco Badge */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="text-orange-400 dark:text-yellow-400 flex items-center gap-2 text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  <span>Eco-Certified Resort</span>
                </p>
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-white/20">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-xl font-bold">5.0</p>
                    <p className="text-xs font-light opacity-80">
                      Guest Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Text Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-500">
              <p className="text-sm font-medium text-orange-400 dark:text-yellow-400 mb-3 uppercase tracking-wider">
                Sustainable Luxury
              </p>
              <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Redefining{" "}
                <span className="text-orange-400 dark:text-yellow-400">
                  Eco-Tourism
                </span>{" "}
                in Goa
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  repellendus expedita ut eius et, delectus nam, corporis vel
                  debitis totam cum maiores excepturi nostrum perspiciatis.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid hic, doloremque similique inventore enim itaque
                  blanditiis necessitatibus deleniti obcaecati adipisci
                  molestiae eum doloribus ipsam mollitia laboriosam magnam. At,
                  ipsam quidem!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Our Sustainability Story
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1 - Image Left / Text Right */}
      <section className="py-10 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Image Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-500">
              <p className="text-sm font-medium text-orange-400 dark:text-yellow-400 mb-3 uppercase tracking-wider">
                Sustainable Luxury
              </p>
              <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Redefining{" "}
                <span className="text-orange-400 dark:text-yellow-400">
                  Eco-Tourism
                </span>{" "}
                in Goa
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Libero earum quae corporis, veniam quis dicta consequuntur
                  molestiae numquam, suscipit quia recusandae autem nesciunt
                  pariatur laudantium?
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  nulla, facere autem ratione tenetur, eaque temporibus porro
                  tempore pariatur quia quo? Quaerat quae eos excepturi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Our Sustainability Story
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Right Column - Text Section */}
            <div className="relative rounded-3xl overflow-hidden h-full shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Wilderest Resort luxury villas surrounded by nature"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Eco Badge */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="text-orange-400 dark:text-yellow-400 flex items-center gap-2 text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  <span>Eco-Certified Resort</span>
                </p>
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-white/20">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-xl font-bold">5.0</p>
                    <p className="text-xs font-light opacity-80">
                      Guest Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2 - Text Left / Image Right */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.1 },
              },
            }}
          >
            <h3 className="text-xl text-black dark:text-white font-handwriting mb-2">
              Culinary Philosophy
            </h3>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Farm-to-Table Dining Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our culinary team creates unforgettable dining experiences using
              ingredients sourced from our organic garden and local farmers. We
              celebrate Goan flavors while adding contemporary twists to
              traditional recipes.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  100%
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Organic produce
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  30+
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Local suppliers
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  0
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Food waste</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  5
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  On-site gardens
                </p>
              </div>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
              Discover Our Menus
            </button>
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
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Chef preparing fresh local cuisine at Wilderest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Section>

      {/* New Section 3 - Image Left / Text Right */}
      <Section className="bg-gray-50 dark:bg-gray-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.1 },
              },
            }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1582719471384-8af8ec1a7183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Guests enjoying spa treatment at Wilderest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
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
          >
            <h3 className="text-xl text-black dark:text-white font-handwriting mb-2">
              Wellness & Rejuvenation
            </h3>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Holistic Healing Experiences
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our award-winning spa combines ancient Ayurvedic traditions with
              modern wellness techniques. All treatments use organic products
              made from locally-sourced ingredients, providing authentic healing
              experiences.
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    Ayurvedic Treatments
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Personalized by certified practitioners
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    Yoga & Meditation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Daily sessions with ocean views
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    Detox Programs
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tailored 3-7 day wellness journeys
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
              Explore Wellness Packages
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Our Philosophy Section */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <div className="text-center mb-20">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Our guiding principles
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Our Philosophy
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Values
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            These core beliefs shape every decision we make at Wilderest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainable Luxury",
              description:
                "We prove that luxury and sustainability aren't mutually exclusive through innovative eco-design and operations.",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              ),
              stats: "100% renewable energy",
            },
            {
              title: "Community First",
              description:
                "85% of our staff are local residents, and we source 90% of our materials within 50km.",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              ),
              stats: "85% local employment",
            },
            {
              title: "Nature Immersion",
              description:
                "Our 20-acre property preserves native flora and fauna while offering immersive nature experiences.",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              ),
              stats: "20 acres preserved",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 * index, duration: 0.5 },
                },
              }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <p className="text-green-600 dark:text-green-400 font-medium">
                {item.stats}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Sustainability Section */}
      <Section>
        <div className="text-center mb-20">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Our green commitment
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Sustainability
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Promise
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Concrete actions behind our environmental commitment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "100%", label: "Renewable Energy" },
            { value: "80%", label: "Waste Recycled" },
            { value: "50+", label: "Native Species Protected" },
            { value: "0", label: "Single-Use Plastics" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.1 * index, duration: 0.5 },
                },
              }}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
            >
              <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            },
          }}
          className="mt-16 bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Our Conservation Partners
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We collaborate with local and international organizations to
                protect Goa's biodiversity. 5% of every booking goes directly to
                conservation projects.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                Learn About Our Initiatives
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://via.placeholder.com/150?text=Partner+1",
                "https://via.placeholder.com/150?text=Partner+2",
                "https://via.placeholder.com/150?text=Partner+3",
                "https://via.placeholder.com/150?text=Partner+4",
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Conservation partner ${index + 1}`}
                  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-20">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            The faces behind
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Our Team
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Family
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Passionate individuals dedicated to creating unforgettable
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Priya Sharma",
              role: "Founder & Director",
              image:
                "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg",
              bio: "Environmental activist turned hospitality visionary with 15 years experience.",
            },
            {
              name: "Michael Costa",
              role: "Head of Sustainability",
              image:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
              bio: "Former marine biologist leading our conservation efforts.",
            },
            {
              name: "Anika Patel",
              role: "Guest Experience",
              image:
                "https://images.pexels.com/photos/3760819/pexels-photo-3760819.jpeg",
              bio: "Creates magical moments with deep local knowledge.",
            },
            {
              name: "Rahul Nair",
              role: "Head Chef",
              image:
                "https://images.pexels.com/photos/4252140/pexels-photo-4252140.jpeg",
              bio: "Michelin-trained chef specializing in sustainable cuisine.",
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
                  transition: { delay: 0.1 * index, duration: 0.5 },
                },
              }}
              whileHover={{ y: -10 }}
              className="group text-center bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Wilderest`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-bold text-xl text-white">
                      {member.name}
                    </h3>
                    <p className="text-green-300">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-20">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Guest experiences
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Testimonials
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Voices
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            What our guests say about their Wilderest experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "The perfect blend of luxury and sustainability. Waking up to birdsong in our treehouse was magical.",
              author: "Sarah K., London",
              rating: 5,
            },
            {
              quote:
                "The team's passion for conservation is infectious. We left inspired to make changes at home.",
              author: "Raj & Meera, Mumbai",
              rating: 5,
            },
            {
              quote:
                "Every detail reflects their commitment to the environment without compromising on comfort.",
              author: "Thomas L., Berlin",
              rating: 4,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 * index, duration: 0.5 },
                },
              }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-medium text-gray-800 dark:text-white">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
