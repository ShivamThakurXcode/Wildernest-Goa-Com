import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Leaf,
  Star,
  Mountain,
  Sunset,
  Droplets,
  Music,
  MapPin,
  Clock,
  Gauge,
  Sun,
  Check,
  Bird,
  Film,
  FlaskConical,
  Droplet,
} from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import HeroBanner from "../layouts/hero-innerPage";

const activities = [
  {
    id: 1,
    title: "Property Treks",
    icon: <Mountain className="w-5 h-5" />,
    description: "Explore scenic trails across our 50-acre property",
    fullDescription:
      "Discover hidden gems across our expansive property with guided treks through diverse landscapes including spice plantations, fruit orchards, and natural springs. Our expert naturalists will introduce you to native flora and fauna while sharing insights about the local ecosystem.",
    duration: "1-2 Hours",
    intensity: "Moderate",
    bestTime: "Morning or Evening",
    image: "/activities/trekking.png",
    ecoBadge: true,
    rating: 4.9,
    highlights: [
      "Multiple route options for different fitness levels",
      "Photography stops at scenic viewpoints",
      "Learn about medicinal plants and their uses",
    ],
  },
  {
    id: 2,
    title: "Sunset Point Trek",
    icon: <Sunset className="w-5 h-5" />,
    description: "Hike to our exclusive viewpoint for breathtaking sunsets",
    fullDescription:
      "Our signature sunset trek takes you through lush trails to a private vantage point with panoramic views of the Goan coastline. Enjoy complimentary refreshments as you watch the sun dip below the horizon in a spectacular display of colors.",
    duration: "1.5 Hours",
    intensity: "Moderate",
    bestTime: "Evening",
    image: "/activities/sunset.png",
    ecoBadge: true,
    rating: 5.0,
    highlights: [
      "Exclusive access to private viewpoint",
      "Complimentary tropical drinks",
      "Perfect photo opportunities",
    ],
  },
  {
    id: 3,
    title: "Heena Sessions",
    icon: <Droplets className="w-5 h-5" />,
    description: "Traditional Mehandi art for ladies",
    fullDescription:
      "Experience the ancient art of Heena with our skilled local artists. These intricate temporary tattoos are a beautiful cultural tradition, using all-natural henna paste in relaxing garden settings.",
    duration: "45-60 mins",
    intensity: "Relaxing",
    bestTime: "Afternoon",
    image: "/activities/heena.png",
    ecoBadge: false,
    rating: 4.8,
    highlights: [
      "Authentic natural henna paste",
      "Custom designs to choose from",
      "Cultural explanation of traditions",
    ],
  },
  {
    id: 4,
    title: "Forest Walk & Waterfalls Trek",
    icon: <Droplet className="w-5 h-5" />,
    description: "Explore lush forests and discover hidden waterfalls",
    fullDescription:
      "Venture into the surrounding forests with our experienced guides to discover seasonal waterfalls and pristine natural pools. Learn about the local ecosystem while enjoying the therapeutic sounds of nature and cool mountain waters.",
    duration: "2-3 Hours",
    intensity: "Moderate to Challenging",
    bestTime: "Morning",
    image: "/activities/watterfall.png",
    ecoBadge: true,
    rating: 4.7,
    highlights: [
      "Seasonal waterfalls (Nov-Aug)",
      "Natural swimming pools",
      "Forest ecology education",
    ],
  },
  {
    id: 5,
    title: "Folk Dance & Music Night",
    icon: <Music className="w-5 h-5" />,
    description: "Cultural evening with local performers",
    fullDescription:
      "Immerse yourself in Goan culture with an evening of traditional folk dances and music performed by local artists. Enjoy the vibrant performances around a bonfire with opportunities to participate and learn some dance steps yourself.",
    duration: "1.5 Hours",
    intensity: "Relaxing",
    bestTime: "Evening",
    image: "/activities/trd_dance.png",
    ecoBadge: true,
    rating: 4.9,
    highlights: [
      "Authentic Goan folk performances",
      "Bonfire setting",
      "Interactive participation",
    ],
  },
  {
    id: 6,
    title: "Bird Watching Trail",
    icon: <Bird className="w-5 h-5" />,
    description: "Early morning avian exploration",
    fullDescription:
      "Join our resident ornithologist for a peaceful morning birdwatching session. Spot colorful kingfishers, majestic eagles, and numerous migratory species in their natural habitat. Binoculars and field guides provided.",
    duration: "1.5 Hours",
    intensity: "Easy",
    bestTime: "Dawn",
    image: "/activities/bird_watching.png",
    ecoBadge: true,
    rating: 4.6,
    highlights: [
      "Expert-guided tour",
      "Spot rare migratory birds",
      "Includes equipment",
    ],
  },
  {
    id: 7,
    title: "Wildlife Presentation",
    icon: <Film className="w-5 h-5" />,
    description: "Educational slideshow on local biodiversity",
    fullDescription:
      "An informative and visually stunning presentation about the region's rich biodiversity. Learn about the wildlife you might encounter during your stay and conservation efforts to protect these species.",
    duration: "45 mins",
    intensity: "Relaxing",
    bestTime: "Evening",
    image: "/activities/projector.png",
    ecoBadge: true,
    rating: 4.5,
    highlights: [
      "HD wildlife footage",
      "Conservation education",
      "Q&A with naturalists",
    ],
  },
  {
    id: 8,
    title: "Pottery Workshop",
    icon: <FlaskConical className="w-5 h-5" />,
    description: "Hands-on clay crafting experience",
    fullDescription:
      "Try your hand at traditional Goan pottery techniques under the guidance of master artisans. Create your own clay masterpiece to take home as a unique souvenir of your stay.",
    duration: "1 Hour",
    intensity: "Creative",
    bestTime: "Morning or Afternoon",
    image: "/activities/pottery.png",
    ecoBadge: true,
    rating: 4.7,
    highlights: [
      "All materials provided",
      "Traditional techniques",
      "Take home your creation",
    ],
  },
  {
    id: 9,
    title: "Resort Facilities",
    icon: <MapPin className="w-5 h-5" />,
    description: "Enjoy all our premium amenities",
    fullDescription:
      "Access to all resort facilities including our infinity pool with panoramic views, well-maintained gardens, and relaxation areas. Our staff is always available to enhance your comfort and enjoyment.",
    duration: "All Day",
    intensity: "Relaxing",
    bestTime: "Any Time",
    image: "/activities/pool.jpg",
    ecoBadge: false,
    rating: 4.8,
    highlights: [
      "Infinity swimming pool",
      "Lush garden spaces",
      "24/7 staff assistance",
    ],
  },
];

const ActivityPage = () => {
  return (
    <>
      <Helmet>
        <title>Activities | Wilderest Nature Resort</title>
        <meta
          name="description"
          content="Experience diverse activities at Wilderest Resort Goa - from treks and cultural experiences to nature exploration and relaxation."
        />
      </Helmet>
      {/* Hero Section */}
      <HeroBanner
        title="Immersive Experiences"
        subTitle="Connect with Goa's Nature & Culture"
        paragraph="Each activity is carefully crafted to create meaningful connections."
      />

      <section className="py-10 pt-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="text-center">
          <h3 className="text-xl text-black dark:text-white font-handwriting">
            Interests
          </h3>
          <h2 className="text-5xl font-bold text-black dark:text-white relative">
            Goa Experience
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 dark:text-white/5 font-bold select-none">
              Adventure
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Dive into a world of diverse activities at Wilderest Resort Goa,
            where nature exploration, cultural experiences, and relaxation come
            together.
          </p>
        </div>
      </section>

      {activities.map((activity, index) => (
        <Section
          key={activity.id}
          className={`py-6 ${
            index % 2 === 0
              ? "bg-white dark:bg-gray-900"
              : "bg-orange-50 dark:bg-gray-800/30"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Column */}
              <div className="relative rounded-2xl overflow-hidden  shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-[430px] object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />

                {/* Eco Badge */}
                {activity.ecoBadge && (
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <p className="text-orange-400 dark:text-yellow-400 flex items-center gap-1 text-xs font-medium">
                      <Leaf className="w-3 h-3" />
                      <span>Eco-Certified</span>
                    </p>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-1">
                    <div className="p-1 rounded-full bg-white/20">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div className="text-white">
                      <p className="text-lg font-bold">{activity.rating}</p>
                      <p className="text-[10px] font-light opacity-80">
                        Guest Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {activity.title}
                </h2>

                <div className="space-y-3 mb-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {activity.fullDescription}
                  </p>
                </div>

                {/* Activity Info Cards */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-orange-50 dark:bg-gray-700/50 p-2 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-lg">Duration</span>
                    </div>
                    <p className="font-bold text-xs">{activity.duration}</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-gray-700/50 p-2 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <Gauge className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-lg">Intensity</span>
                    </div>
                    <p className="font-bold text-xs">{activity.intensity}</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-gray-700/50 p-2 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <Sun className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-lg">Best Time</span>
                    </div>
                    <p className="font-bold text-nowrap text-xs">
                      {activity.bestTime}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-2">
                    Experience Highlights
                  </h4>
                  <ul className="space-y-1">
                    {activity.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-amber-500 w-4 h-4 mt-0.5 mr-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 ">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}
    </>
  );
};

export default ActivityPage;
