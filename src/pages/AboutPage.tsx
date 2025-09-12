import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Leaf, ArrowRight, MapPin, CloudRain, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Section from "../components/ui/Section";
import FeatureSection from "../components/home/FeaturesSection";
import HeroBanner from "../layouts/hero-innerPage";

const AboutPage = () => {
  const controls = useAnimation();
  const [, inView] = useInView({
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
        <title>
          About Us | Wildernest Nature Resort - Western Ghats Eco Retreat
        </title>
        <meta
          name="description"
          content="Discover Wildernest Nature Resort in the Western Ghats, a 700-acre eco-retreat at the meeting point of Goa, Karnataka, and Maharashtra since 2005."
        />
        <meta
          property="og:title"
          content="About Wildernest Nature Resort - Eco Tourism Pioneer"
        />
        <meta
          property="og:description"
          content="Nestled in the Chorla Ghats, our 700-acre retreat is surrounded by ancient rainforests teeming with rare species and waterfalls."
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Wildernest Nature Resort, Western Ghats, eco-tourism, Chorla Ghats, sustainable resort, Goa resort"
        />
      </Helmet>

      {/* Hero Section */}
      <HeroBanner
        title="About Wildernest"
        subTitle="Discover our essence"
        paragraph="Wildernest Nature Resort: In the Heart of the Western Ghats"
      />

      {/* Location & Introduction Section */}
      <section className="py-10 pt-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="text-center mb-20">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Our sanctuary
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Nestled Amid Two States, Bordered By Rainforests
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Location
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Where Goa, Karnataka, and Maharashtra meet in natural harmony
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Image Section */}
            <div className="relative rounded-3xl overflow-hidden h-full shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <img
                src="./about/abt-1.webp"
                alt="Wildernest Nature Resort nestled in the Western Ghats"
                className="w-full h-full object-cover bg-cover bg-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Location Badge */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="text-orange-400 dark:text-yellow-400 flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Chorla Ghats, Western Ghats</span>
                </p>
              </div>

              {/* Acreage Badge */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-white/20">
                    <Leaf className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-xl font-bold">700</p>
                    <p className="text-xs font-light opacity-80">
                      Protected Acres
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-500">
              <p className="text-sm font-medium text-orange-400 dark:text-yellow-400 mb-3 uppercase tracking-wider">
                Since 2005
              </p>
              <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                A Sanctuary in{" "}
                <span className="text-orange-400 dark:text-yellow-400">
                  Swapnagandha Valley
                </span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Wildernest Nature Resort stands atop the lush Chorla Ghats, at
                  the meeting point of Goa, Karnataka, and Maharashtra. Since
                  2005, this 700-acre retreat in the Swapnagandha Valley has
                  been surrounded by ancient rainforests teeming with rare
                  species, medicinal plants, and waterfalls.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our close partnerships with nearby villages have fostered
                  sustainable employment and supported local livelihoods.
                  Together, we've safeguarded the beauty and diversity of the
                  valley, enriching the surrounding community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Our Conservation Story
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Explore The Region
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-10 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Text Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-500">
              <p className="text-sm font-medium text-orange-400 dark:text-yellow-400 mb-3 uppercase tracking-wider">
                Our Foundation
              </p>
              <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                A Vision Born From{" "}
                <span className="text-orange-400 dark:text-yellow-400">
                  Urgency
                </span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  More than 20 years ago, Captain Nitin Dhond, now Managing
                  Director, began protecting this region from timber extraction,
                  mining, and monocultures. He united nature lovers and wildlife
                  experts in a new conservation movement.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Since welcoming guests in 2005, Wildernest has been a leader
                  in eco-tourism in Goa, setting the standard for responsible
                  travel. By staying with us, you directly aid conservation and
                  help preserve this unique ecosystem.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-400">
                <p className="text-amber-700 dark:text-amber-300 italic">
                  "Let your heart beat with the forests, let your mind rest in
                  the clouds—welcome to Wildernest."
                </p>
                <p className="text-amber-600 dark:text-amber-400 text-sm mt-2">
                  - Captain Nitin Dhond, Managing Director
                </p>
              </div>
            </div>

            {/* Right Column - Image Section */}
            <div className="relative rounded-3xl overflow-hidden h-full shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <img
                src="./about/abt-2.webp"
                alt="Captain Nitin Dhond, Managing Director of Wildernest"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Founding Year Badge */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="text-orange-400 dark:text-yellow-400 flex items-center gap-2 text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  <span>Founded in 2005</span>
                </p>
              </div>

              {/* Elevation Badge */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-white/20">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <div className="text-white">
                    <p className="text-xl font-bold">800m</p>
                    <p className="text-xs font-light opacity-80">
                      Above Sea Level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./about/abt-3.webp"
              alt="Monsoon season at Wildernest Nature Resort"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-xl text-black dark:text-white font-handwriting mb-2">
              Our Unique Environment
            </h3>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Rain or Shine: The Wildernest Climate
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We thrive in misty valleys and rolling clouds. From June to
              September, the monsoons transform the forest into a vibrant green,
              fed by the Halatar and Valvanti rivers, both of which are vital to
              the Mahadayi River.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The rest of the year brings fresh mountain air, birdsong, and
              temperatures from 15°C to 28°C—perfect for exploring the natural
              wonders of the Western Ghats.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2 flex items-center">
                  <CloudRain className="w-6 h-6 mr-2" />
                  15°C
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Coolest temperatures
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                  28°C
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Warmest temperatures
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2">
                  Jun-Sept
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Monsoon season
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-400 dark:text-orange-400 mb-2">
                  2 Rivers
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Halatar & Valvanti
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Conservation Section */}
      <Section className="bg-gray-50 dark:bg-gray-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl text-black dark:text-white font-handwriting mb-2">
              Our Commitment
            </h3>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Conservation in Action
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We follow a 'minimal interference' philosophy: only 5 of our 700
              acres are developed, with structures blending into the forest
              canopy. We conduct regular impact assessments, respect the area's
              carrying capacity, and have declared the forest a private wildlife
              sanctuary to prevent poaching and protect river catchments.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Since 2005, we have observed a 15% increase in sightings of native
              species, underscoring our commitment to preserving biodiversity.
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-4">
                  <Leaf className="w-6 h-6 text-orange-400 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    Minimal Interference
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Only 5 of 700 acres developed
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    Wildlife Sanctuary
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Private sanctuary protecting native species
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    15% Increase
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    In native species sightings since 2005
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./about/abt-4.webp"
              alt="Wildlife at Wildernest Nature Resort sanctuary"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <section className="py-10 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="text-center mb-20">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Your stay with us
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            More Than a Stay—An Immersion
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Experience
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Discover the authentic Western Ghats through immersive experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Text Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-500">
              <p className="text-sm font-medium text-orange-400 dark:text-yellow-400 mb-3 uppercase tracking-wider">
                Authentic Experiences
              </p>
              <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Connect With Nature &{" "}
                <span className="text-orange-400 dark:text-yellow-400">
                  Community
                </span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The guest experience at Wildernest unfolds seamlessly from
                  arrival. Guests begin by choosing one of 18 eco-cottages, each
                  crafted from local materials and set amid the forest.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Upon settling in, guests can enjoy regional cuisine at our
                  restaurant, relax in the Ayurvedic wellness center, or take a
                  dip in the infinity pool overlooking the valley.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Each day reveals new moments: embark on guided nature walks,
                  attend folk performances, or join naturalist-led talks that
                  reveal Goa's secret wild soul. Throughout your stay, every
                  activity directly supports the livelihoods of neighboring
                  villages, with local communities playing a vital role in their
                  preservation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Accommodation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Activities
                </button>
              </div>
            </div>

            {/* Right Column - Image Section */}
            <div className="relative rounded-3xl overflow-hidden h-full shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <img
                src="./about/abt-5.webp"
                alt="Eco cottage at Wildernest Nature Resort"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Cottage Badge */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="text-orange-400 dark:text-yellow-400 flex items-center gap-2 text-sm font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  <span>18 Eco-Cottages</span>
                </p>
              </div>

              {/* Community Badge */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-white/20">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <div className="text-white">
                    <p className="text-xl font-bold">Local</p>
                    <p className="text-xs font-light opacity-80">
                      Community Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection />

      {/* Our Promise Section */}
      <Section className="bg-gradient-to-br from-amber-50 to-amber-50 dark:from-amber-900/20 dark:to-amber-900/20">
        <div className="text-center mb-16">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Our commitment to you
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Our Promise
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Commitment
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Wildernest is a living example of the powerful alliance between
            conservation and hospitality. We invite you to reconnect with
            nature, experience the pulse of the Western Ghats, and leave only
            footprints—so this valley remains wild and wondrous for generations
            to come.
          </p>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-x-2 divide-gray-200 dark:divide-gray-700 gap-6">
              <div className="text-center p-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-amber-600 dark:text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Founded
                </h3>
                <p className="text-gray-600 dark:text-gray-300">2005</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-amber-600 dark:text-amber-400"
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
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Elevation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">800m ASL</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudRain className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Climate
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monsoon Green
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-2xl font-handwriting text-gray-800 dark:text-white">
            Come, find your wild.
          </p>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
