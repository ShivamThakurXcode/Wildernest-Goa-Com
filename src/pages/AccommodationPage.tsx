import { Helmet } from "react-helmet";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Check, Info, Star, Heart, MapPin, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

interface Accommodation {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  capacity: string;
  size: string;
  rating: number;
  images: string[];
  features: string[];
  highlights: string[];
}

const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Luxury Forest Villa",
    category: "Premium",
    description:
      "Our most spacious accommodation, nestled in the forest with a private deck and outdoor jacuzzi. Perfect for couples seeking privacy and luxury.",
    price: 18500,
    capacity: "2 Adults, 2 Children",
    size: "120 sq.m",
    rating: 4.9,
    images: [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: [
      "King-sized bed with premium linens",
      "Private outdoor jacuzzi",
      "Floor-to-ceiling windows with forest views",
      "Eco-friendly climate control",
      "Ensuite luxury bathroom with rainfall shower",
      "Complimentary minibar with local organic products",
      "Private deck with outdoor seating",
      "Smart TV and high-speed WiFi",
    ],
    highlights: [
      "Private forest access",
      "Award-winning architecture",
      "Most booked villa",
    ],
  },
  {
    id: 2,
    name: "Treetop Eco-Cabin",
    category: "Eco-Friendly",
    description:
      "Elevated among the treetops, these unique cabins offer a remarkable perspective of the surrounding forest and wildlife. Sustainably built with modern amenities.",
    price: 14500,
    capacity: "2 Adults",
    size: "75 sq.m",
    rating: 4.8,
    images: [
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: [
      "Queen-sized bed with organic linens",
      "Panoramic windows with 270° forest views",
      "Private balcony with hammock",
      "Solar-powered amenities",
      "Ensuite bathroom with organic toiletries",
      "Bluetooth sound system",
      "In-room yoga space",
      "High-speed WiFi",
    ],
    highlights: [
      "Carbon-neutral stay",
      "Birdwatching paradise",
      "Sunrise views",
    ],
  },
  {
    id: 3,
    name: "Garden Suite",
    category: "Family",
    description:
      "Located within our botanical garden, these suites offer direct access to the flora and fauna of our property. Ideal for nature enthusiasts who appreciate comfort.",
    price: 12500,
    capacity: "2 Adults, 1 Child",
    size: "90 sq.m",
    rating: 4.7,
    images: [
      "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: [
      "King-sized or twin beds with premium linens",
      "Private garden patio",
      "Indoor-outdoor living space",
      "Aromatherapy diffuser with essential oils",
      "Ensuite bathroom with dual vanity",
      "Workstation with garden views",
      "Minibar with organic snacks and beverages",
      "High-speed WiFi",
    ],
    highlights: [
      "Butterfly garden access",
      "Family-friendly",
      "Educational tours included",
    ],
  },
  {
    id: 4,
    name: "Family Valley View",
    category: "Family",
    description:
      "Spacious accommodation with breathtaking panoramic valley views. Perfect for families wanting to experience nature together with ample space.",
    price: 22500,
    capacity: "2 Adults, 2 Children",
    size: "110 sq.m",
    rating: 4.8,
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: [
      "Two separate bedrooms",
      "Spacious living area",
      "Private balcony with valley views",
      "Kid-friendly amenities",
      "Ensuite bathrooms",
      "Kitchenette",
      "Board games and books",
      "High-speed WiFi",
    ],
    highlights: [
      "Best for families",
      "Stunning sunset views",
      "Close to kids' activity center",
    ],
  },
  {
    id: 5,
    name: "Waterfall View Suite",
    category: "Premium",
    description:
      "Luxury suite with direct views of our private waterfall. The sound of cascading water creates a serene atmosphere for ultimate relaxation.",
    price: 29500,
    capacity: "2 Adults",
    size: "85 sq.m",
    rating: 4.9,
    images: [
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: [
      "King-sized canopy bed",
      "Private waterfall viewing deck",
      "Outdoor rainfall shower",
      "Personal butler service",
      "Luxury bathroom with soaking tub",
      "Complimentary champagne on arrival",
      "Daily spa credit",
      "High-speed WiFi",
    ],
    highlights: [
      "Most romantic suite",
      "Private waterfall access",
      "VIP services included",
    ],
  },
  {
    id: 6,
    name: "Forest View Cottage",
    category: "Eco-Friendly",
    description:
      "Charming cottage completely immersed in the forest canopy. Perfect for couples seeking a secluded nature retreat with modern comforts.",
    price: 16500,
    capacity: "2 Adults",
    size: "65 sq.m",
    rating: 4.7,
    images: [
      "https://images.pexels.com/photos/2066739/pexels-photo-2066739.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: [
      "Queen-sized bed with forest views",
      "Private veranda",
      "Wood-burning fireplace",
      "Eco-friendly toiletries",
      "Outdoor shower",
      "Local art and decor",
      "Yoga mats provided",
      "High-speed WiFi",
    ],
    highlights: ["Most secluded option", "Wildlife spotting", "Eco-certified"],
  },
];

const categories = [
  { id: "all", name: "All Rooms", icon: <Home size={16} /> },
  { id: "Premium", name: "Premium", icon: <Star size={16} /> },
  { id: "Family", name: "Family", icon: <Users size={16} /> },
  { id: "Eco-Friendly", name: "Eco-Friendly", icon: <Heart size={16} /> },
];

const AccommodationPage = () => {
  const [selectedAccommodation, setSelectedAccommodation] =
    useState<Accommodation>(accommodations[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredAccommodations =
    activeCategory === "all"
      ? accommodations
      : accommodations.filter((acc) => acc.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Accommodations | Wilderest Nature Resort</title>
        <meta
          name="description"
          content="Explore our luxury accommodations at Wilderest Nature Resort in Goa. From forest villas to treetop cabins, find your perfect stay."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('./hero-dark.svg')`,
        }}
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Our Accommodations</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Experience luxury in harmony with nature. Our accommodations are
            designed to provide comfort while immersing you in the natural
            beauty of Goa.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <Section className="pt-4 pb-0">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              icon={category.icon}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </Section>

      {/* Accommodations Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredAccommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card cursor-pointer transition-all hover:scale-[1.02] ${
                selectedAccommodation.id === accommodation.id
                  ? "ring-2 ring-primary-500"
                  : ""
              }`}
              onClick={() => {
                setSelectedAccommodation(accommodation);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={accommodation.images[0]}
                  alt={accommodation.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full flex items-center">
                  <Star className="text-yellow-500 fill-yellow-500 w-4 h-4 mr-1" />
                  <span className="text-xs font-medium">
                    {accommodation.rating}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full">
                  <span className="text-xs font-medium">
                    {accommodation.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{accommodation.name}</h3>
                  <p className="font-medium text-primary-600 dark:text-primary-400">
                    ₹{accommodation.price.toLocaleString()}
                    <span className="text-gray-500 text-sm"> /night</span>
                  </p>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{accommodation.size}</span>
                  <span className="mx-2">•</span>
                  <Users className="w-4 h-4 mr-1" />
                  <span>{accommodation.capacity}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {accommodation.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {accommodation.highlights.slice(0, 2).map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-xs px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Accommodation Details */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl relative">
                <img
                  src={selectedAccommodation.images[currentImageIndex]}
                  alt={`${selectedAccommodation.name} view ${
                    currentImageIndex + 1
                  }`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full flex items-center shadow-sm">
                  <Star className="text-yellow-500 fill-yellow-500 w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">
                    {selectedAccommodation.rating} Rating
                  </span>
                </div>
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {selectedAccommodation.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                      currentImageIndex === index
                        ? "ring-2 ring-primary-500 scale-105"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedAccommodation.name} thumbnail ${
                        index + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-bold">
                  {selectedAccommodation.name}
                </h2>
                <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm">
                  {selectedAccommodation.category}
                </span>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Goa, India • {selectedAccommodation.size}</span>
              </div>

              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(selectedAccommodation.rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  ({selectedAccommodation.rating.toFixed(1)})
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {selectedAccommodation.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Price per night
                  </p>
                  <p className="font-bold text-xl text-primary-600 dark:text-primary-400">
                    ₹{selectedAccommodation.price.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Capacity
                  </p>
                  <p className="font-bold">{selectedAccommodation.capacity}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Size
                  </p>
                  <p className="font-bold">{selectedAccommodation.size}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl flex items-center">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Availability
                    </p>
                    <p className="font-bold text-success-600">Available</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Room Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAccommodation.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Amenities & Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {selectedAccommodation.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check
                      size={18}
                      className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl mb-6 flex items-start">
                <Info
                  size={20}
                  className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prices may vary based on season and availability. Special
                  rates available for longer stays. Contact us for special
                  packages and honeymoon deals.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  as={Link}
                  to="/book"
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-400 hover:from-primary-700 hover:to-primary-500"
                >
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById("inquiry-form")?.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <h2 className="text-center mb-12">
          What Our <span className="text-gradient">Guests Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rahul & Priya",
              stay: "Luxury Forest Villa",
              rating: 5,
              comment:
                "The perfect honeymoon retreat! The private jacuzzi with forest views was magical. Service was impeccable and the attention to detail made our stay unforgettable.",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "The Kapoor Family",
              stay: "Family Valley View",
              rating: 4,
              comment:
                "Our kids loved the activities and the space was perfect for our family. The valley views at sunrise were breathtaking. Will definitely return!",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Ananya & Kabir",
              stay: "Waterfall View Suite",
              rating: 5,
              comment:
                "Waking up to the sound of the waterfall was therapeutic. The suite exceeded all our expectations - luxury in perfect harmony with nature.",
              avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stayed in {testimonial.stay}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Additional Information Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-4">
              All Rooms <span className="text-gradient">Include</span>
            </h2>
            <ul className="space-y-3">
              {[
                "Daily housekeeping service",
                "Complimentary breakfast with organic, locally-sourced ingredients",
                "Access to all resort amenities (pool, fitness center, etc.)",
                "Welcome drink and fruit basket upon arrival",
                "High-speed WiFi throughout the property",
                "24-hour concierge service",
                "Free parking for guests",
                "Daily guided nature walk (subject to availability)",
                "Evening turndown service",
                "Complimentary yoga mats in all rooms",
                "Personalized nature excursion planning",
                "24/7 in-room dining",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check
                    size={18}
                    className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4">
              Booking <span className="text-gradient">Information</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-1">
                  Check-in & Check-out
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check-in: 2:00 PM - 10:00 PM
                  <br />
                  Check-out: Until 11:00 AM
                  <br />
                  Early check-in and late check-out available upon request
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-1">Payments</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We accept all major credit cards, UPI, and bank transfers. A
                  50% advance payment is required to confirm your booking.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-1">
                  Cancellation Policy
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Free cancellation up to 7 days before arrival. Cancellations
                  less than 7 days before arrival are subject to a 50% charge.
                  <Link
                    to="/cancellation"
                    className="text-primary-600 dark:text-primary-400 ml-1"
                  >
                    View full policy
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-1">Special Requests</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For special requests (dietary restrictions, room preferences,
                  anniversary celebrations, etc.), please mention them during
                  booking or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Inquiry Form Section */}
      <Section id="inquiry-form">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm">
          <h2 className="text-center mb-6">
            Have Questions? <span className="text-gradient">Contact Us</span>
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
                placeholder="+91 "
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Accommodation Interest
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800">
                <option>Select an option</option>
                {accommodations.map((acc) => (
                  <option key={acc.id}>{acc.name}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <Button size="lg" className="w-full">
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default AccommodationPage;
