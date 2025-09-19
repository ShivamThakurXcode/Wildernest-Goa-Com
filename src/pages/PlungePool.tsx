import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  MapPin,
  Mountain,
  Palette,
  Flame,
  Video,
  Mail,
  Phone,
  User,
  Calendar,
  Waves,
  Sun,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const PlungePool = {
  name: "Private Plunge Pool Cottage",
  tagline: "Nature, Privacy & Your Own Pool",
  description:
    "Our signature cottages with private plunge pools offer a unique blend of comfort and natural beauty. Enjoy your own pool, open-air living, and stunning valley views—perfect for couples seeking a romantic escape.",
  price: 11000,
  originalPrice: 12500,
  capacity: "2 Adults (Couples Only)",
  size: "Luxury Cottage with Private Pool (Non-AC)",
  rating: 4.8,
  images: [
    "/PlungePoolAC/1.jpg",
    "/PlungePoolAC/2.png",
    "/PlungePoolAC/3.jpg",
    "/PlungePoolAC/4.jpg",
    "/PlungePoolAC/5.jpg",
    "/PlungePoolAC/6.jpg",
    "/PlungePoolAC/7.jpg",
    "/PlungePoolAC/8.png",
  ],
  features: [
    "King-sized bed",
    "Private plunge pool (non-AC)",
    "Spacious open-air bathroom",
    "Private sit-out with valley views",
    "Complimentary welcome drink",
    "Daily housekeeping",
    "Premium bath amenities",
    "Romantic lighting",
  ],
  highlights: [
    { icon: <Droplets size={20} />, text: "Private plunge pool" },
    { icon: <Mountain size={20} />, text: "Stunning valley views" },
    { icon: <Sun size={20} />, text: "All meals included" },
    { icon: <Waves size={20} />, text: "Nature-inspired design" },
  ],
  experiences: [
    "Private poolside dining available",
    "Couples spa & massage packages",
    "Sunset bonfire setup",
    "Guided nature walks",
    "Romantic balcony dining",
  ],
  specialNotes: [
    "Couples only - no extra person allowed",
    "No children permitted in this cottage type",
    "Non-AC accommodation for a true nature experience",
  ],
};

const PlungePoolPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>Private Plunge Pool Cottage | Wildernest Nature Resort</title>
        <meta
          name="description"
          content="Luxury cottage with private plunge pool at Wildernest Nature Resort. Perfect for couples seeking a romantic, nature-inspired escape."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative">
        <div className="h-screen max-h-[500px] bg-cover bg-center overflow-hidden">
          <img
            src="/cta-bg.svg"
            alt={PlungePool.name}
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
                {PlungePool.name}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                {PlungePool.tagline}
              </p>
              <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  as={Link}
                  to="/book"
                  size="xl"
                  className="flex-shrink-0 flex items-center  justify-center gap-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:bg-gradient-to-tl hover:from-orange-500 hover:to-yellow-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Book Your Plunge Pool Escape
                </Button>
                <div className="flex-shrink-0 flex items-center text-white bg-white/10 px-3 sm:px-4 py-2 sm:py-3 filter backdrop-blur-xl rounded-4xl">
                  <span className="mr-2 text-sm sm:text-base">From</span>
                  <span className="text-xl sm:text-2xl font-bold">
                    ₹{PlungePool.price.toLocaleString()}
                  </span>
                  <span className="ml-1 line-through text-gray-300 text-sm sm:text-base">
                    ₹{PlungePool.originalPrice.toLocaleString()}
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
                src={PlungePool.images[1]}
                alt="Private Plunge Pool Cottage"
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
            {PlungePool.highlights.map((highlight, index) => (
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
                src={PlungePool.images[currentImageIndex]}
                alt={`${PlungePool.name} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full flex items-center shadow-sm">
                <Star className="text-amber-500 fill-amber-500 w-4 h-4 mr-1" />
                <span className="text-sm font-medium">
                  {PlungePool.rating} Guest Rating
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {PlungePool.images.map((image, index) => (
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
                {PlungePool.features.map((feature, index) => (
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
                Exclusive Couples Experiences
              </h3>
              <ul className="space-y-2">
                {PlungePool.experiences.map((exp, index) => (
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
                        ₹{PlungePool.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        per night
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs line-through text-gray-500 dark:text-gray-400">
                        ₹{PlungePool.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 px-2 py-1 rounded-full">
                        Save{" "}
                        {Math.round(
                          (1 - PlungePool.price / PlungePool.originalPrice) *
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
                        ₹{(PlungePool.price * 1.2).toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        per night
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs line-through text-gray-500 dark:text-gray-400">
                        ₹{(PlungePool.originalPrice * 1.2).toLocaleString()}
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
                Plunge Pool Cottage Package
              </p>
              <h2 className="text-4xl text-center sm:text-4xl font-bold text-white mb-8 leading-tight">
                Nature & Romance at{" "}
                <span className="text-amber-400">Wildernest</span>
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-gray-100 text-center leading-relaxed">
                  Your stay includes exclusive activities and amenities designed
                  for couples seeking a private, nature-inspired getaway.
                </p>
              </div>
              <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Droplets className="w-5 h-5 text-amber-400" />
                  Private Plunge Pool Access
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Flame className="w-5 h-5 text-amber-400" />
                  Romantic Bonfire Setup
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Palette className="w-5 h-5 text-amber-400" />
                  Couples Spa Packages
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Sun className="w-5 h-5 text-amber-400" />
                  Private Sunset Viewing
                </div>
                <div className="flex items-center gap-3 border-2 border-white/20 hover:border-amber-400 text-white px-6 py-3 rounded-xl transition-all">
                  <Video className="w-5 h-5 text-amber-400" />
                  In-room Dining Service
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
              {PlungePool.description}
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">
                  Plunge Pool Cottage
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  All-inclusive nature-inspired package for couples
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                    ₹{PlungePool.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 line-through">
                    ₹{PlungePool.originalPrice.toLocaleString()}
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
                    <span>Private plunge pool with your cottage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Nature-inspired open-air bathroom</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All meals (breakfast, lunch, dinner)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evening tea and snacks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-amber-600 dark:text-amber-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to all resort activities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
              <h3 className="font-semibold text-lg mb-3">
                Special Romance Packages
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Enhance your stay with these romantic additions:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    1
                  </span>
                  <span>Romantic balcony dinner setup (₹2500)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    2
                  </span>
                  <span>Couples spa package (₹3500)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    3
                  </span>
                  <span>Sunset champagne service (₹1800)</span>
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
                    Book Your Plunge Pool Escape
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
                  </div>
                  {/* Submit Button */}
                  <Button
                    size="xl"
                    className="w-full mt-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    PLAN YOUR TRIP
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
              {PlungePool.specialNotes && (
                <div className="bg-amber-50 dark:bg-gray-700 mt-8 p-6 rounded-xl border border-amber-200 dark:border-gray-600 mb-8">
                  <h3 className="text-xl font-semibold mb-3">Special Notes</h3>
                  <ul className="space-y-2">
                    {PlungePool.specialNotes.map((note, index) => (
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
              Perfectly Located in North Goa
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our Private Plunge Pool cottages are situated on a private
              hillside in North Goa, offering both tranquility and spectacular
              views.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Mountain className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Exclusive Privacy</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Secluded location with maximum privacy for couples
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
                    Complimentary shuttle service to our private beach area
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mt-0.5">
                  <Sun className="text-amber-600 dark:text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Nature Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Non-AC cottages for a true nature stay
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

export default PlungePoolPage;
