import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  MapPin,
  Car,
  Train,
  Plane,
  Ship,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const HowToReachPage = () => {
  return (
    <>
      <Helmet>
        <title>How to Reach | Wilderest Nature Resort, Goa</title>
        <meta
          name="description"
          content="Find the best ways to reach Wilderest Nature Resort in Goa - by air, road, rail, or sea. Get detailed directions, transport options, and contact information."
        />
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
              Explore Your Journey
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-white relative mb-6">
              How to Reach Wilderest
            </h1>
            <p className="text-gray-100 text-lg max-w-3xl mx-auto">
              Unlock the path to Goa's hidden gem
            </p>
          </motion.div>
        </div>
      </div>
      {/* Location Overview */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Wilderest Nature Resort is nestled in the pristine forests of
              South Goa, just 45 minutes from Dabolim Airport. Our secluded
              location offers tranquility while remaining easily accessible.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-orange-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Wilderest Nature Resort, <br />
                    Canacona, South Goa - 403702 <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-orange-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Contact</h3>
                  <p className="text-gray-600">
                    +91 98765 43210 <br />
                    reservations@wilderestgoa.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-orange-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Check-in/out</h3>
                  <p className="text-gray-600">
                    Check-in: 2:00 PM | Check-out: 11:00 AM <br />
                    Early check-in/late check-out subject to availability
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-96"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.123456789012!2d73.987654321!3d15.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA3JzI0LjQiTiA3M8KwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </Section>
      {/* Transportation Options */}
      <Section className="bg-orange-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Choose Your Preferred Travel Method
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            We're accessible by all major transportation modes with detailed
            directions for each
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* By Air */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mr-5">
                <Plane className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Air</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Nearest Airport:</strong> Dabolim International Airport
                (GOI) - 35 km
              </p>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  From Airport to Resort:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                      1
                    </span>
                    <span>Pre-book our luxury airport transfer (45 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                      2
                    </span>
                    <span>
                      Taxi services available at airport (approx ₹1500-2000)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                      3
                    </span>
                    <span>Self-drive car rentals available at airport</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                Book Airport Transfer
              </Button>
            </div>
          </motion.div>

          {/* By Road */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mr-5">
                <Car className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Road</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Well-connected by national highways and scenic coastal roads
              </p>

              <div className="space-y-3">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    From Panaji (North Goa)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    70 km via NH66 (1.5-2 hours)
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    From Margao (South Goa)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    30 km via Canacona Road (45 min)
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    From Mumbai
                  </h4>
                  <p className="text-gray-600 text-sm">
                    600 km via NH48 (10-12 hours)
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                Download Driving Directions
              </Button>
            </div>
          </motion.div>

          {/* By Train */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mr-5">
                <Train className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Train</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Canacona Railway Station
                  </h4>
                  <p className="text-gray-600 text-sm">
                    8 km from resort (15 min drive)
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Connects to Mumbai, Delhi, Bengaluru
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Madgaon Junction (Margao)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    35 km from resort (50 min drive)
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Major junction with more train options
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                We can arrange pickup from both stations with prior notice
              </p>

              <Button
                variant="outline"
                className="w-full mt-4 border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                View Train Schedule
              </Button>
            </div>
          </motion.div>

          {/* By Sea */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mr-5">
                <Ship className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Sea</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mormugao Port (Vasco da Gama)
                </h4>
                <p className="text-gray-600">
                  40 km from resort (1 hour drive)
                </p>
              </div>

              <p className="text-gray-600">
                Arriving by private yacht? We offer:
              </p>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                    1
                  </span>
                  <span>Docking recommendations at nearby marinas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                    2
                  </span>
                  <span>Private speedboat transfers available</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                    3
                  </span>
                  <span>Custom arrival experiences</span>
                </li>
              </ul>

              <Button
                variant="outline"
                className="w-full mt-4 border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                Contact Our Concierge
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
      {/* Local Transport Options */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Local Transportation Options
            </h2>
            <p className="text-lg text-gray-600">
              Getting around during your stay at Wilderest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Car className="w-8 h-8 text-orange-600" />,
                title: "Resort Vehicles",
                description:
                  "Private cars with drivers for hire by the hour or day",
                price: "₹1200/hour",
              },
              {
                icon: <Car className="w-8 h-8 text-orange-600" />,
                title: "Self-Drive Cars",
                description:
                  "Curated selection of luxury SUVs and convertibles",
                price: "From ₹3500/day",
              },
              {
                icon: <Car className="w-8 h-8 text-orange-600" />,
                title: "Scooter Rentals",
                description: "Electric scooters for eco-friendly exploration",
                price: "₹800/day",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-xl border border-orange-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {option.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{option.description}</p>
                <p className="font-semibold text-orange-600">{option.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      \
    </>
  );
};

export default HowToReachPage;
