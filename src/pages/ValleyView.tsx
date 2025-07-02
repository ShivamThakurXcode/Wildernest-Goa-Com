import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  MapPin,
  Users,
  Mountain,
  Palette,
  Flame,
  Video,
  Flower2,
  Bird,
  LucideWaves,
  Waves,
  Leaf,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const FamilyValleyView = {
  id: 1,
  name: "Family Valley View",
  tagline: "Panoramic Vistas for Your Family Escape",
  description:
    "Nestled on our premium hillside location, the Family Valley View accommodation offers breathtaking panoramic views of Goa's lush valleys. This spacious retreat is designed for families seeking both adventure and relaxation, featuring a private balcony, kid-friendly amenities, and direct access to nature trails.",
  price: 13000,
  capacity: "2 Adults + 2 Children",
  size: "110 sqm",
  rating: 4.9,
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
    "Spacious master bedroom with king-sized bed",
    "Children's bunk room with custom jungle-themed decor",
    "Private infinity-edge balcony with valley views",
    "Living area with convertible sofa bed",
    "Kitchenette with mini-fridge and coffee station",
    "Two modern bathrooms (one with tub)",
    "Smart TV with family entertainment package",
    "Complimentary kid's adventure backpack",
  ],
  highlights: [
    { icon: <Sun size={20} />, text: "Sunrise views from your balcony" },
    { icon: <Leaf size={20} />, text: "Direct access to nature trails" },
    { icon: <Users size={20} />, text: "Family-friendly activities included" },
    { icon: <Mountain size={20} />, text: "Panoramic valley vistas" },
  ],
  experiences: [
    "Guided family nature walks",
    "Outdoor movie nights under the stars",
    "Kids' jungle survival workshop",
    "Family yoga sessions at sunrise",
    "Family yoga sessions at sunrise",
  ],
};

const ValleyView = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>Family Valley View | Wilderest Nature Resort</title>
        <meta
          name="description"
          content="Experience panoramic valley views with your family at Wilderest Nature Resort in Goa. Spacious accommodations designed for family comfort and adventure."
        />
      </Helmet>
      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-screen max-h-[500px] bg-cover bg-center  overflow-hidden bg-[url('./public/cta-bg.svg')]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('./cta-bg.svg')`,
          }}
        >
          <img
            src="/cta-bg.svg"
            alt={FamilyValleyView.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        </div>

        <div className="absolute inset-0 container mx-auto px-6 flex items-center">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10  items-center w-full">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mt-20 "
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
                  Book Your Family Escape
                </Button>
                <div className="flex items-center text-white bg-white/10 px-4 py-3 filter backdrop-blur-xl   rounded-4xl">
                  <span className="mr-2">From</span>
                  <span className="text-2xl font-bold">
                    ₹{FamilyValleyView.price.toLocaleString()}
                  </span>
                  <span className="ml-1">/ Person</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[300px] mt-16 "
            >
              <img
                src="./Home/hero.png"
                alt="Wilderest Resort luxury villas surrounded by nature"
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
              <h3 className="text-2xl font-semibold mb-4">Room Features</h3>
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
              <h3 className="text-xl font-semibold mb-3">
                Exclusive Family Experiences
              </h3>
              <ul className="space-y-2">
                {FamilyValleyView.experiences.map((exp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {exp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as={Link}
                to="/book"
                size="xl"
                className="flex items-center justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-gradient-to-tl hover:from-orange-500 hover:to-yellow-500 text-white px-16 py-4 rounded-4xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Stay
              </Button>
              <Button
                variant="outline"
                size="xl"
                className=" flex items-center justify-center gap-3 border-orange-400 hover:bg-orange-100  text-orange-400 px-8 py-3 rounded-4xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Our Specialists
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="relative py-20 px-4 sm:px-6 bg-cover bg-center bg-[url('./public/cta-bg.svg')]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('./cta-bg.svg')`,
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            {/* Left Column - Text Section */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
              <p className="text-sm font-medium text-center text-amber-400 mb-3 uppercase tracking-wider">
                Family Valley View Package
              </p>
              <h2 className="text-4xl text-center sm:text-4xl font-bold text-white mb-8 leading-tight">
                Details of Family Valley View at{" "}
                <span className="text-amber-400">Wilderest Goa</span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-gray-100 text-justify leading-relaxed">
                  Our Family Valley View package is designed to provide an
                  unforgettable experience for families seeking adventure and
                  relaxation. Nestled on our premium hillside location, this
                  spacious retreat offers breathtaking panoramic views of Goa's
                  lush valleys.
                </p>
                <p className="text-gray-100 text-justify leading-relaxed">
                  This package includes a private balcony, kid-friendly
                  amenities, and direct access to nature trails, ensuring a
                  perfect blend of luxury and nature. Enjoy world-class
                  amenities and unparalleled comfort while exploring the beauty
                  of Goa with your loved ones.
                </p>
              </div>

              <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Mountain className="w-5 h-5 text-amber-400" />
                  Trek to Sunset Point
                </div>

                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Palette className="w-5 h-5 text-amber-400" />
                  Heena & Mehndi Session
                </div>

                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Leaf className="w-5 h-5 text-amber-400" />
                  Forest / Waterfall Trek
                </div>

                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Flame className="w-5 h-5 text-amber-400" />
                  Folk Dance & Bonfire
                </div>

                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Video className="w-5 h-5 text-amber-400" />
                  Wildlife Slide Show
                </div>

                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Flower2 className="w-5 h-5 text-amber-400" />
                  Pottery Session
                </div>

                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Bird className="w-5 h-5 text-amber-400" />
                  Bird Watching Trail
                </div>

                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <LucideWaves className="w-5 h-5 text-amber-400" />
                  Swimming Pool Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing & Booking Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Pricing & Packages</h2>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">Standard Rate</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Best flexible rate with no restrictions
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                    ₹{FamilyValleyView.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500">/ Person</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-medium mb-3">Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
              <h3 className="font-semibold text-lg mb-3">Special Offers</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Book 4 nights or more and receive:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    1
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    2
                  </span>
                  <span>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    3
                  </span>
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6 bg-amber-600 dark:bg-amber-700">
                  <h3 className="text-xl font-semibold text-white">
                    Ready for Your Family Adventure?
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-medium">{FamilyValleyView.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Starting from
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                      ₹{FamilyValleyView.price.toLocaleString()}
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
                        <option>2 Adults + 2 Children</option>
                        <option>2 Adults + 1 Child</option>
                        <option>2 Adults</option>
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
                      Or call us at{" "}
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

              <div className="mt-6 bg-amber-50 dark:bg-gray-800 rounded-xl p-6 border border-amber-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-3">
                  Child Policy and Package Details
                </h3>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Child Policy: Children below 5 years stay free. Children
                    between 5-12 years are charged at 50% of the adult rate.
                    Children above 12 years are considered adults.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Package Policy: Our packages are designed for a minimum stay
                    of 2 nights. Cancellation or modification of bookings is
                    subject to a fee. Please contact us for more information.
                  </p>
                </div>
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
              Perfectly Located in North Goa
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our Family Valley View accommodations are situated on a private
              hillside in North Goa, offering both tranquility and convenient
              access to family-friendly attractions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <MapPin className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Nearby Attractions</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Children's Park (5 min) • Beach (10 min) • Water Park (15
                    min) • Wildlife Sanctuary (20 min)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Waves className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Beach Access</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complimentary shuttle service to our private beach club with
                    family cabanas and kid-safe swimming area.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Users className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Family Services</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Babysitting services available • Kids' club with daily
                    activities • Family concierge for planning your outings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
            {/* Map placeholder - replace with actual map component */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <MapPin className="w-12 h-12 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ValleyView;
