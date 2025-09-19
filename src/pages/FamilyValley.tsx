import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  MapPin,
  Mountain,
  Flame,
  Video,
  Mail,
  Phone,
  User,
  Calendar,
  Users,
  Home,
  TreePine,
} from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const FamilyValleyView = {
  name: "Family Valley View Package",
  tagline: "Spacious Comfort with Breathtaking Valley Views",
  description:
    "Our family valley view cottages offer spacious accommodations perfect for families. Enjoy stunning valley views, comfortable living spaces, and amenities designed for family bonding—ideal for creating lasting memories together.",
  price: 13000,
  originalPrice: 15000,
  capacity: "2 Adults + 2 Children",
  size: "Family Cottage with Valley View (Non-AC)",
  rating: 4.9,
  images: [
    "/FamilyValleyView/1.jpg",
    "/FamilyValleyView/2.jpg",
    "/FamilyValleyView/3.jpg",
    "/FamilyValleyView/4.jpg",
    "/FamilyValleyView/5.jpg",
    "/FamilyValleyView/6.jpg",
    "/FamilyValleyView/7.jpg",
    "/FamilyValleyView/8.jpg",
  ],
  features: [
    "One king + two single beds",
    "Balcony with valley views",
    "Spacious living area",
    "Welcome drinks",
    "Daily housekeeping",
    "Family-sized bathroom",
    "Nature-inspired design",
    "Extra bedding available",
  ],
  highlights: [
    { icon: <Mountain size={20} />, text: "Panoramic valley views" },
    { icon: <Users size={20} />, text: "Family-friendly amenities" },
    { icon: <Home size={20} />, text: "Spacious accommodations" },
    { icon: <TreePine size={20} />, text: "Nature surroundings" },
  ],
  experiences: [
    "Family bonfire setup",
    "Board games and outdoor activities",
    "Guided family nature walks",
    "Child-friendly meal options",
    "Evening storytelling sessions",
  ],
  specialNotes: [
    "Maximum 2 adults + 2 children (below 12 years)",
    "Extra bed available on request",
    "Childcare services available (additional charge)",
    "Non-AC accommodation for authentic nature experience",
  ],
};

const FamilyValleyViewPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>Family Valley View Package | Wildernest Nature Resort</title>
        <meta
          name="description"
          content="Spacious family cottage with valley views at Wildernest Nature Resort. Perfect for families seeking quality time in nature with comfortable amenities."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative">
        <div className="h-screen max-h-[500px] bg-cover bg-center overflow-hidden">
          <img
            src="/cta-bg.svg"
            alt={FamilyValleyView.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        </div>
        <div className="absolute inset-0 container mx-auto px-4 sm:px-6 flex items-center">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center w-full">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mt-16 md:mt-20 mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {FamilyValleyView.name}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                {FamilyValleyView.tagline}
              </p>
              <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  as={Link}
                  to="/book"
                  size="xl"
                  className="flex-shrink-0 flex items-center  justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-gradient-to-tl hover:from-orange-500 hover:to-yellow-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Book Your Family Getaway
                </Button>
                <div className="flex-shrink-0 flex items-center text-white bg-white/10 px-3 sm:px-4 py-2 sm:py-3 filter backdrop-blur-xl rounded-4xl">
                  <span className="mr-2 text-sm sm:text-base">From</span>
                  <span className="text-xl sm:text-2xl font-bold">
                    ₹{FamilyValleyView.price.toLocaleString()}
                  </span>
                  <span className="ml-1 line-through text-gray-300 text-sm sm:text-base">
                    ₹{FamilyValleyView.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Right Column - Image Section - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[250px] sm:h-[300px] mt-8 lg:mt-16 hidden md:block"
            >
              <img
                src={FamilyValleyView.images[5]}
                alt="Family Valley View Package"
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
              <h3 className="text-xl font-semibold mb-3">Family Experiences</h3>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Weekday Pricing */}
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/10 dark:to-amber-900/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800/50">
                <div className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  BEST VALUE
                </div>
                <div className="flex flex-col h-full">
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                        Weekday Rate
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Monday - Thursday
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-3xl font-bold text-gray-800 dark:text-white">
                        ₹{FamilyValleyView.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        per night
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs line-through text-gray-500 dark:text-gray-400">
                        ₹{FamilyValleyView.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 px-2 py-1 rounded-full">
                        Save{" "}
                        {Math.round(
                          (1 -
                            FamilyValleyView.price /
                              FamilyValleyView.originalPrice) *
                            100
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Weekend Pricing */}
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/10 dark:to-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800/50">
                <div className="flex flex-col h-full">
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        Weekend Rate
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Friday - Sunday
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-3xl font-bold text-gray-800 dark:text-white">
                        ₹{(FamilyValleyView.price * 1.2).toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        per night
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs line-through text-gray-500 dark:text-gray-400">
                        ₹
                        {(
                          FamilyValleyView.originalPrice * 1.2
                        ).toLocaleString()}
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 px-2 py-1 rounded-full">
                        Weekend Premium
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Activities Section */}
      <Section
        className="relative py-20 px-4 sm:px-6  bg-cover bg-center bg-[url('./public/cta-bg.svg')]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('./cta-bg.svg')`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
              <p className="text-sm font-medium text-center text-amber-400 mb-3 uppercase tracking-wider">
                Family Valley View Package
              </p>
              <h2 className="text-4xl text-center sm:text-4xl font-bold text-white mb-8 leading-tight">
                Family Bonding & Nature at{" "}
                <span className="text-amber-400">Wildernest</span>
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-gray-100 text-center leading-relaxed">
                  Your stay includes family-friendly activities and amenities
                  designed for creating memorable experiences together in
                  nature.
                </p>
              </div>
              <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Mountain className="w-5 h-5 text-amber-400" />
                  Panoramic Valley Views
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Users className="w-5 h-5 text-amber-400" />
                  Family-sized Accommodation
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Flame className="w-5 h-5 text-amber-400" />
                  Family Bonfire Evenings
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <TreePine className="w-5 h-5 text-amber-400" />
                  Nature Activities
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Video className="w-5 h-5 text-amber-400" />
                  Child-friendly Dining
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Booking Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Package Details</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {FamilyValleyView.description}
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">
                  Family Valley View Cottage
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  All-inclusive family package with valley views
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
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spacious accommodation for family of 4</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Private balcony with valley views</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All meals (breakfast, lunch, dinner)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evening snacks and beverages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to all family-friendly activities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
              <h3 className="font-semibold text-lg mb-3">
                Special Family Packages
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Enhance your family stay with these experiences:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    1
                  </span>
                  <span>Family nature treasure hunt (₹2000)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    2
                  </span>
                  <span>Family spa package (₹4000)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    3
                  </span>
                  <span>Private family picnic setup (₹2500)</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700">
                  <h3 className="text-xl font-semibold text-white text-center">
                    Book Your Family Getaway
                  </h3>
                </div>
                {/* Body */}
                <div className="p-6">
                  {/* Form Fields */}
                  <div className="space-y-5">
                    {/* Name and Phone in one row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-all"
                          />
                          <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="+91 "
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-all"
                          />
                          <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      </div>
                    </div>
                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-all"
                        />
                        <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                    {/* Date Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Check-In Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Check-Out Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Children Info */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Number of Children
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition-all">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <Button
                    size="xl"
                    className="w-full mt-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    PLAN YOUR FAMILY TRIP
                  </Button>
                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Need help? Call us at{" "}
                      <a
                        href="tel:+919480022108"
                        className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
                      >
                        +91 94800 22108
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {FamilyValleyView.specialNotes && (
                <div className="bg-amber-50 dark:bg-gray-700 mt-8 p-6 rounded-xl border border-amber-200 dark:border-gray-600 mb-8">
                  <h3 className="text-xl font-semibold mb-3">Special Notes</h3>
                  <ul className="space-y-2">
                    {FamilyValleyView.specialNotes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
      {/* Location Section */}
      <Section className="bg-amber-50 dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Perfect Family Location in North Goa
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our Family Valley View cottages are situated in a peaceful area of
              North Goa, offering both family-friendly amenities and spectacular
              valley views.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Home className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Family-Friendly</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Spacious accommodations designed for families
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Mountain className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Valley Views</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Stunning panoramic views from your private balcony
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Users className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Activities</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Special programs and activities for children
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

export default FamilyValleyViewPage;
