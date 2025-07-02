import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  MapPin,
  Users,
  Home,
  Mountain,
  Leaf,
  Utensils,
  Route,
  Sunset,
  Coffee,
  Baby,
  Car,
} from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const FamilyValleyView = {
  id: 1,
  name: "Family Valley View",
  tagline: "Spacious Accommodation for Families",
  description:
    "Our Family Valley View cottage offers comfortable accommodation for up to 4 adults, featuring breathtaking valley views. Perfect for families looking to connect with nature while enjoying modern comforts.",
  price: 11551,
  originalPrice: 13000,
  capacity: "4 Adults",
  size: "Spacious Family Cottage",
  rating: 4.8,
  images: [
    "./FamilyVV/FamilyHero.jpg",
    "./FamilyVV/1.jpg",
    "./FamilyVV/2.jpg",
    "./FamilyVV/3.jpg",
    "./FamilyVV/4.jpg",
    "./FamilyVV/5.jpg",
    "./FamilyVV/6.jpg",
    "./FamilyVV/7.jpg",
  ],
  features: [
    "Spacious valley-facing accommodation",
    "Comfortable bedding for 4 adults",
    "Private balcony with valley views",
    "En-suite bathroom with eco-friendly amenities",
    "Natural ventilation and ceiling fans",
    "Complimentary welcome drink",
  ],
  highlights: [
    { icon: <Users size={20} />, text: "Ideal for families or groups" },
    { icon: <Mountain size={20} />, text: "Panoramic valley views" },
    { icon: <Leaf size={20} />, text: "Eco-friendly accommodation" },
    { icon: <Sunset size={20} />, text: "Access to sunset point" },
  ],
  inclusions: [
    { icon: <Utensils />, text: "All meals (Veg & Non-Veg)" },
    { icon: <Coffee />, text: "Evening tea/snacks" },
    { icon: <Route />, text: "Guided treks & nature walks" },
    { icon: <Baby />, text: "One child below 10 years free" },
  ],
};

const tariffDetails = {
  season: "01st April 2025 till 30th Sept 2025",
  plan: "AP (All Inclusive)",
  checkIn: "1330 Hrs",
  checkOut: "1130 Hrs",
  activities: [
    "Treks to various spots on the property",
    "Trekking to Sunset Point",
    "Heena & Mehandi session for Ladies",
    "Forest Walk / waterfalls trek",
    "Traditional Folk dance & Music by local villagers / Bonfire",
    "Bird Watching Trail (Early morning Activity)",
    "Slide-show on Wildlife and Bio-Diversity",
    "Pottery session",
    "Swimming Pool access",
  ],
  childPolicy: [
    "One child below 10 years: Complimentary on sharing basis",
    "Child 10-18 years: ₹2500/- with extra mattress & all inclusive",
  ],
  notes: [
    "02 nights stay recommended to enjoy all activities",
    "Pickup & drop from North Goa locations: ₹5000/- (for 2 pax staying 2 nights)",
    "Extra adult: ₹3000/- per night with mattress and all inclusive",
    "Private plunge pool cottages are for couples only - no extra person allowed",
    "No AC, no television & no room service",
    "Stag groups not allowed",
  ],
};

const AccommodationCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="bg-amber-100 dark:bg-amber-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);

const AccommodationPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>Family Valley View | Wildernest Nature Resort</title>
        <meta
          name="description"
          content="Family Valley View accommodation at Wildernest Nature Resort. Spacious cottage for 4 adults with all meals included and nature activities."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative">
        <div className="h-screen max-h-[500px] bg-cover bg-center overflow-hidden">
          <img
            src="./FamilyVV/FamilyHero.jpg"
            alt={FamilyValleyView.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        </div>

        <div className="absolute inset-0 container mx-auto px-6 flex items-center">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mt-20"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {FamilyValleyView.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                {FamilyValleyView.tagline}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  as={Link}
                  to="/book"
                  size="xl"
                  className="flex items-center justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-gradient-to-tl hover:from-orange-500 hover:to-yellow-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </Button>
                <div className="flex items-center text-white bg-white/10 px-4 py-3 filter backdrop-blur-xl rounded-4xl">
                  <span className="mr-2">From</span>
                  <span className="text-2xl font-bold">
                    ₹{FamilyValleyView.price.toLocaleString()}
                  </span>
                  <span className="ml-1 line-through text-gray-300">
                    ₹{FamilyValleyView.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[300px] mt-16"
            >
              <img
                src="./FamilyVV/1.jpg"
                alt="Family Valley View cottage"
                className="absolute inset-0 w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white/20 transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Highlights Ribbon */}
      <div className="bg-amber-50 dark:bg-gray-800 py-6 border-y border-amber-100 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FamilyValleyView.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="text-amber-600 dark:text-amber-400">
                  {highlight.icon}
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {highlight.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Package Cards Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Your All-Inclusive Package
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need for a perfect nature getaway is included in your
            stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AccommodationCard
            icon={<Utensils className="text-amber-600 dark:text-amber-400" />}
            title="All Meals Included"
            description="Enjoy buffet breakfast, lunch, dinner and evening snacks with both veg and non-veg options"
          />

          <AccommodationCard
            icon={<Route className="text-amber-600 dark:text-amber-400" />}
            title="Nature Activities"
            description="Guided treks, bird watching, pottery sessions and cultural performances included"
          />

          <AccommodationCard
            icon={<Baby className="text-amber-600 dark:text-amber-400" />}
            title="Child Friendly"
            description="One child below 10 years stays free. Special activities for kids available"
          />

          <AccommodationCard
            icon={<Sunset className="text-amber-600 dark:text-amber-400" />}
            title="Unique Experiences"
            description="Sunset point trek, bonfire nights, and traditional folk dance performances"
          />
        </div>
      </Section>

      {/* Gallery & Details Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
              <img
                src={FamilyValleyView.images[currentImageIndex]}
                alt={`${FamilyValleyView.name} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full flex items-center shadow-sm">
                <Star className="text-amber-500 fill-amber-500 w-4 h-4 mr-1" />
                <span className="text-sm font-medium">
                  {FamilyValleyView.rating} Guest Rating
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {FamilyValleyView.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all ${
                    currentImageIndex === index
                      ? "ring-2 ring-amber-500 scale-105"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Cottage Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FamilyValleyView.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-amber-50/50 dark:bg-gray-700/50 p-3 rounded-lg"
                  >
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border border-amber-200 dark:border-gray-600 mb-8">
              <h3 className="text-xl font-semibold mb-3">Tariff Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Season:</h4>
                  <p>{tariffDetails.season}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Plan:</h4>
                  <p>{tariffDetails.plan}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Check-in/Check-out:</h4>
                  <p>
                    {tariffDetails.checkIn} / {tariffDetails.checkOut}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as={Link}
                to="/book"
                size="xl"
                className="flex items-center justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-gradient-to-tl hover:from-orange-500 hover:to-yellow-500 text-white px-8 rounded-4xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Reserve Your Stay
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center gap-3 border-orange-400 hover:bg-orange-100 text-orange-400 px-8 py-3 rounded-4xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Our Specialists
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Activities Section */}
      <Section className="bg-amber-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Included Activities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enjoy these complimentary activities during your stay (minimum 2
            nights recommended)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tariffDetails.activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start bg-white dark:bg-gray-700 p-4 rounded-lg"
            >
              <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                {activity}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Policies Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Child Policy</h3>
            <ul className="space-y-4">
              {tariffDetails.childPolicy.map((policy, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Baby className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {policy}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Important Notes</h3>
            <ul className="space-y-3">
              {tariffDetails.notes.map((note, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {note}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Pricing & Booking Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Pricing Details</h2>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">
                  Family Valley View
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  All-inclusive package for 4 adults
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                    ₹{FamilyValleyView.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 line-through">
                    ₹{FamilyValleyView.originalPrice.toLocaleString()}
                  </span>
                  <span className="ml-2 text-sm bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 px-2 py-1 rounded">
                    TAC Applied
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-medium mb-3">Package Includes:</h4>
                <ul className="space-y-2">
                  {FamilyValleyView.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
              <h3 className="font-semibold text-lg mb-3">Transport Options</h3>
              <div className="flex items-start gap-3 mb-4">
                <Car className="text-amber-600 dark:text-amber-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pickup & drop from North Goa locations available at ₹5,000/-
                    for 2 pax (for guests staying minimum 2 nights)
                  </p>
                </div>
              </div>
              <Button
                as={Link}
                to="/transport"
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400"
              >
                View Transport Options
              </Button>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6 bg-amber-600 dark:bg-amber-700">
                  <h3 className="text-xl font-semibold text-white">
                    Ready to Book Your Family Getaway?
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-medium">{FamilyValleyView.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        All-inclusive package for 4 adults
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm line-through text-gray-500">
                        ₹{FamilyValleyView.originalPrice.toLocaleString()}
                      </span>
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        ₹{FamilyValleyView.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Dates
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Check-in"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700"
                        />
                        <input
                          type="text"
                          placeholder="Check-out"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Guests
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700">
                        <option>4 Adults</option>
                        <option>3 Adults + 1 Child (10-18 yrs)</option>
                        <option>2 Adults + 2 Children</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    size="xl"
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Check Availability
                  </Button>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      For special requests, call us at{" "}
                      <a
                        href="tel:+919876543210"
                        className="text-amber-600 dark:text-amber-400 font-medium"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium mb-3">Family Testimonials</h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(FamilyValleyView.rating)
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {FamilyValleyView.rating} from 86 family reviews
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400"
                >
                  Read Guest Experiences
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section className="bg-amber-50 dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Wildernest Nature Resort Location
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Nestled in the pristine Western Ghats of Goa, our eco-resort
              offers a perfect blend of nature and comfort, away from the hustle
              and bustle of city life.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <MapPin className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Check-in/Check-out</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Standard time: 1:30 PM / 11:30 AM
                    <br />
                    Early check-in/late checkout subject to availability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Users className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Group Policy</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Families and couples welcome. Stag groups not permitted to
                    maintain the serene atmosphere.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Home className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Eco-Friendly Stay</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    No AC or televisions in cottages. Designed for you to
                    connect with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
            {/* Map placeholder - replace with actual map component */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <MapPin className="w-12 h-12 text-amber-600 dark:text-amber-400" />
              <span className="ml-2">Wildernest Nature Resort Location</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AccommodationPage;
