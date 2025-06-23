import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
import HeroBanner from "../layouts/hero-innerPage";
import {
  MapPin,
  Star,
  ChevronRight,
  Leaf,
  Zap,
  Users,
  Check,
  Sunset,
  Coffee,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const activityCategories = [
  { id: "all", name: "All Activities" },
  { id: "adventure", name: "Adventure Sports" },
  { id: "nature", name: "Nature Experiences" },
  { id: "family", name: "Family Activities" },
  { id: "wellness", name: "Wellness & Relaxation" },
];
const activities = [
  {
    id: 1,
    title: "Wilderest Jungle Survival Expedition",
    category: "adventure",
    highlight: "Most Popular Adventure",
    description:
      "3-day immersive survival training in Wilderest's private jungle reserve with our expert naturalists",
    duration: "3 Days",
    intensity: "High",
    ageGroup: "16+ Years",
    price: 9500,
    rating: 4.9,
    image: "/images/activities/jungle-survival.jpg",
    features: [
      "Shelter building using natural materials",
      "Foraging for wild edibles in Goa's forests",
      "Ancient fire-making techniques",
      "Wilderness first aid certification",
      "Night navigation using stars",
    ],
    includes: [
      "Wilderest survival kit",
      "Certified guides",
      "All meals",
      "Expedition certificate",
    ],
  },
  {
    id: 2,
    title: "Mangrove Kayaking Adventure",
    category: "nature",
    highlight: "Eco-Friendly Experience",
    description:
      "Guided kayaking tour through Goa's unique mangrove ecosystems, perfect for nature lovers",
    duration: "4 Hours",
    intensity: "Medium",
    ageGroup: "12+ Years",
    price: 2500,
    rating: 4.8,
    image: "/images/activities/mangrove-kayaking.jpg",
    features: [
      "Explore hidden mangrove channels",
      "Spot rare bird species and wildlife",
      "Learn about mangrove conservation",
      "Photography opportunities at sunset",
      "Eco-friendly kayaks provided",
    ],
    includes: [
      "Kayak rental and gear",
      "Experienced guide",
      "Refreshments included",
      "Wildlife spotting guidebook",
    ],
  },
  {
    id: 3,
    title: "Family Beach Olympics",
    category: "family",
    highlight: "Fun for All Ages!",
    description:
      "A day of exciting beach games and challenges designed for families to bond and have fun together",
    duration: "6 Hours",
    intensity: "Low",
    ageGroup: "All Ages",
    price: 1500,
    rating: 4.7,
    image: "/images/activities/beach-olympics.jpg",
    features: [
      "Sandcastle building competition",
      "Beach volleyball tournament",
      "Treasure hunt with clues and prizes",
      "Water balloon toss challenge",
      "Family yoga session by the sea",
    ],
    includes: [
      "All equipment provided",
      "Professional facilitators",
      "Beachside refreshments and snacks",
      "Family photo session included",
    ],
  },
];

const ActivityPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);

  const filteredActivities =
    activeCategory === "all"
      ? activities
      : activities.filter((activity) => activity.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Activities | Wilderest Resort Goa</title>
        <meta
          name="description"
          content="Experience thrilling adventure camps and relaxing activities at Wilderest Resort Goa. From jungle survival to mangrove kayaking, find your perfect experience."
        />
      </Helmet>

      {/* Hero Section */}

      <HeroBanner
        title="Activities "
        subTitle="Experience the Best of Goa"
        paragraph="Explore a world of adventure, relaxation, and connection with nature at Wilderest Resort"
      />

      {/* Category Navigation */}
      <div className="sticky top-0 z-20 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {activityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl ${
                expandedActivity === activity.id
                  ? "md:col-span-2 lg:col-span-3"
                  : ""
              }`}
            >
              <div
                className={`grid grid-cols-1 ${
                  expandedActivity === activity.id ? "lg:grid-cols-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  {activity.highlight && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {activity.highlight}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full flex items-center shadow-sm">
                    <Star className="text-amber-500 fill-amber-500 w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">
                      {activity.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold">{activity.title}</h2>
                    <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm">
                      {activity.category === "adventure" && (
                        <span className="flex items-center">
                          <Zap className="w-4 h-4 mr-1" /> Adventure
                        </span>
                      )}
                      {activity.category === "nature" && (
                        <span className="flex items-center">
                          <Leaf className="w-4 h-4 mr-1" /> Nature
                        </span>
                      )}
                      {activity.category === "family" && (
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" /> Family
                        </span>
                      )}
                      {activity.category === "wellness" && (
                        <span className="flex items-center">
                          <Sunset className="w-4 h-4 mr-1" /> Wellness
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {activity.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-amber-50/50 dark:bg-gray-700 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Duration
                      </p>
                      <p className="font-medium">{activity.duration}</p>
                    </div>
                    <div className="bg-amber-50/50 dark:bg-gray-700 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Intensity
                      </p>
                      <p className="font-medium">{activity.intensity}</p>
                    </div>
                    <div className="bg-amber-50/50 dark:bg-gray-700 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Age Group
                      </p>
                      <p className="font-medium">{activity.ageGroup}</p>
                    </div>
                  </div>

                  {expandedActivity === activity.id ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            Experience Highlights
                          </h3>
                          <ul className="space-y-2">
                            {activity.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            What's Included
                          </h3>
                          <ul className="space-y-2">
                            {activity.includes.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          size="lg"
                          className="bg-amber-600 hover:bg-amber-700 flex-1"
                        >
                          Book Now for ₹{activity.price.toLocaleString()}
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400"
                          onClick={() => setExpandedActivity(null)}
                        >
                          Show Less
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        ₹{activity.price.toLocaleString()}
                        <span className="text-sm text-gray-500 ml-1">
                          /person
                        </span>
                      </div>
                      <Button
                        variant="link"
                        className="text-amber-600 dark:text-amber-400 flex items-center"
                        onClick={() => setExpandedActivity(activity.id)}
                      >
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Full-width Experience Banner */}
      <div className="relative py-24 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Adventure Camp"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wilderest Adventure Camps
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Multi-day immersive experiences combining adventure, survival
              skills, and nature connection
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as={Link}
                to="/adventure-camps"
                size="xl"
                className="bg-amber-600 hover:bg-amber-700"
              >
                Explore Camps
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Group Discounts
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Activity Benefits Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Wilderest Activities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our experiences are carefully designed to connect you with Goa's
            natural beauty while ensuring safety, sustainability, and
            unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <Leaf className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              ),
              title: "Eco-Conscious",
              description:
                "Low-impact activities designed to protect Goa's ecosystems",
            },
            {
              icon: (
                <Users className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              ),
              title: "Expert Guides",
              description: "Certified professionals with deep local knowledge",
            },
            {
              icon: (
                <Camera className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              ),
              title: "Photo Service",
              description:
                "Complimentary professional photos of your experience",
            },
            {
              icon: (
                <Coffee className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              ),
              title: "Local Flavors",
              description:
                "Authentic Goan refreshments included in most activities",
            },
            {
              icon: (
                <MapPin className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              ),
              title: "Exclusive Locations",
              description: "Access to private beaches and forest areas",
            },
            {
              icon: (
                <Star className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              ),
              title: "Small Groups",
              description: "Personalized attention with limited group sizes",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center"
            >
              <div className="bg-amber-50 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default ActivityPage;
