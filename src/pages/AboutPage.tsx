import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Leaf, Star, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Section from "../components/ui/Section";
import FeatureSection from "../components/home/FeaturesSection";

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
                src="./Home/hero.png"
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
          <div>
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
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2">
                  100%
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Organic produce
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2">
                  30+
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Local suppliers
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2">
                  0
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Food waste</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2">
                  5
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  On-site gardens
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./Home/hero.png"
              alt="Chef preparing fresh local cuisine at Wilderest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* New Section 3 - Image Left / Text Right */}
      <Section className="bg-gray-50 dark:bg-gray-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./Home/hero.png"
              alt="Guests enjoying spa treatment at Wilderest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
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
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-orange-400 dark:text-orange-400"
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
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-orange-400 dark:text-orange-400"
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
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-orange-400 dark:text-orange-400"
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
          </div>
        </div>
      </Section>
      <FeatureSection />

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
          ].map((item) => (
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <p className="text-orange-400 dark:text-orange-400 font-medium">
                {item.stats}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
