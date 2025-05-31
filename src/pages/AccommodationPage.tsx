import { Helmet } from "react-helmet";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

interface Accommodation {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: string;
  size: string;
  images: string[];
  features: string[];
}

const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Luxury Forest Villa",
    description:
      "Our most spacious accommodation, nestled in the forest with a private deck and outdoor jacuzzi. Perfect for couples seeking privacy and luxury.",
    price: 18500,
    capacity: "2 Adults, 2 Children",
    size: "120 sq.m",
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
  },
  {
    id: 2,
    name: "Treetop Eco-Cabin",
    description:
      "Elevated among the treetops, these unique cabins offer a remarkable perspective of the surrounding forest and wildlife. Sustainably built with modern amenities.",
    price: 14500,
    capacity: "2 Adults",
    size: "75 sq.m",
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
  },
  {
    id: 3,
    name: "Garden Suite",
    description:
      "Located within our botanical garden, these suites offer direct access to the flora and fauna of our property. Ideal for nature enthusiasts who appreciate comfort.",
    price: 12500,
    capacity: "2 Adults, 1 Child",
    size: "90 sq.m",
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
  },
];

const AccommodationPage = () => {
  const [selectedAccommodation, setSelectedAccommodation] =
    useState<Accommodation>(accommodations[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Our Accommodations</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Experience luxury in harmony with nature. Our accommodations are
            designed to provide comfort while immersing you in the natural
            beauty of Goa.
          </p>
        </div>
      </div>

      {/* Accommodations Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {accommodations.map((accommodation, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={accommodation.id}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card cursor-pointer transition-all hover:scale-105 ${
                  selectedAccommodation.id === accommodation.id
                    ? "ring-2 ring-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setSelectedAccommodation(accommodation);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={accommodation.images[0]}
                    alt={accommodation.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl">{accommodation.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {accommodation.description}
                  </p>
                  <p className="font-medium text-primary-600 dark:text-primary-400">
                    ₹{accommodation.price.toLocaleString()} / night
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Accommodation Details */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                <img
                  src={selectedAccommodation.images[currentImageIndex]}
                  alt={`${selectedAccommodation.name} view ${
                    currentImageIndex + 1
                  }`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {selectedAccommodation.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                      currentImageIndex === index
                        ? "ring-2 ring-primary-500"
                        : ""
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
              <h2 className="text-3xl font-bold mb-4">
                {selectedAccommodation.name}
              </h2>
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
                  rates available for longer stays.
                </p>
              </div>

              <Button as={Link} to="/book" size="lg" className="w-full">
                Book Now
              </Button>
            </div>
          </div>
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
                  etc.), please mention them during booking or contact us
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AccommodationPage;
