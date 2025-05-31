import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Plane, Car, Bus, Anchor } from 'lucide-react';
import Section from '../components/ui/Section';

const HowToReachPage = () => {
  return (
    <>
      <Helmet>
        <title>How to Reach | Wilderest Nature Resort</title>
        <meta 
          name="description" 
          content="Find directions to Wilderest Nature Resort in Goa. Learn about transportation options and the best ways to reach our eco-friendly resort."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">How to Reach Us</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Your journey to Wilderest is part of the adventure. Find the best routes and transportation options below.
          </p>
        </div>
      </div>

      {/* Location Overview */}
      <Section>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
            <MapPin size={24} />
          </div>
          <h2 className="mb-4">Our <span className="text-gradient">Location</span></h2>
          <p className="text-gray-600 dark:text-gray-400">
            Wilderest Nature Resort is located in Bardez, North Goa, approximately 45 minutes from Goa International Airport. 
            Nestled between the Western Ghats and just a short drive from some of Goa's most pristine beaches, our resort offers 
            the perfect balance of forest tranquility and coastal access.
          </p>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] mb-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61538.789588542036!2d73.76019024863282!3d15.592269899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0cf0b5b0d5f%3A0xeafd7bd22c55c94c!2sBardez%2C%20Goa!5e0!3m2!1sen!2sin!4v1662452689754!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Wilderest Resort Location"
          ></iframe>
        </div>
        
        {/* Transportation Options */}
        <h2 className="text-center mb-12">Transportation <span className="text-gradient">Options</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TransportOption 
            icon={<Plane size={32} />}
            title="By Air"
            content={
              <>
                <p className="mb-3">
                  <strong>Nearest Airport:</strong> Goa International Airport (Dabolim Airport) - GOI
                </p>
                <p className="mb-3">
                  <strong>Distance:</strong> 45 km (approximately 45-minute drive)
                </p>
                <p>
                  Goa International Airport is well-connected to major Indian cities like Mumbai, Delhi, Bangalore, and international destinations. From the airport, you can:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Book our resort's airport pickup service (recommended)</li>
                  <li>Hire a taxi at the airport counter</li>
                  <li>Pre-book a cab through ride-hailing apps</li>
                </ul>
              </>
            }
          />
          
          <TransportOption 
            icon={<Car size={32} />}
            title="By Road"
            content={
              <>
                <p className="mb-3">
                  <strong>From Mumbai:</strong> 590 km via NH66 (approximately a 10-11 hour drive)
                </p>
                <p className="mb-3">
                  <strong>From Pune:</strong> 450 km via NH48 (approximately an 8-9 hour drive)
                </p>
                <p className="mb-3">
                  <strong>From Bangalore:</strong> 560 km via NH48 (approximately a 10-hour drive)
                </p>
                <p>
                  The drive to Goa offers scenic views, especially through the Western Ghats. Roads are generally well-maintained, but we recommend planning your journey with adequate breaks.
                </p>
              </>
            }
          />
          
          <TransportOption 
            icon={<Bus size={32} />}
            title="By Bus"
            content={
              <>
                <p className="mb-3">
                  Regular bus services connect Goa to major cities like Mumbai, Pune, Bangalore, and more.
                </p>
                <p className="mb-3">
                  <strong>Nearest Bus Stations:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Mapusa Bus Stand (15 km from the resort)</li>
                  <li>Panaji Bus Stand (25 km from the resort)</li>
                </ul>
                <p>
                  From the bus station, you can hire a taxi or auto-rickshaw to reach the resort. We can also arrange a pickup on request.
                </p>
              </>
            }
          />
          
          <TransportOption 
            icon={<Anchor size={32} />}
            title="By Train"
            content={
              <>
                <p className="mb-3">
                  <strong>Nearest Railway Stations:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Thivim Railway Station (20 km)</li>
                  <li>Karmali Railway Station (25 km)</li>
                  <li>Madgaon Railway Station (60 km)</li>
                </ul>
                <p className="mb-3">
                  These stations are connected to major cities across India. From the railway station, you can:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Book our resort's station pickup service</li>
                  <li>Hire a prepaid taxi</li>
                  <li>Use local bus services (may require transfers)</li>
                </ul>
              </>
            }
          />
        </div>
      </Section>
      
      {/* Resort Transfers Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Resort <span className="text-gradient">Transfers</span></h2>
          <p className="text-gray-600 dark:text-gray-400">
            We offer convenient transfer services to and from key transportation hubs. 
            Our resort vehicles are comfortable and driven by experienced local drivers 
            who know the best routes.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg">
          <h3 className="font-semibold text-xl mb-4 text-center">Transfer Rates</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b dark:border-gray-600">
                  <th className="pb-3 pr-6 font-semibold">Location</th>
                  <th className="pb-3 pr-6 font-semibold">Distance</th>
                  <th className="pb-3 pr-6 font-semibold">Duration</th>
                  <th className="pb-3 font-semibold">Price (One Way)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-600">
                  <td className="py-3 pr-6">Goa International Airport</td>
                  <td className="py-3 pr-6">45 km</td>
                  <td className="py-3 pr-6">~45 minutes</td>
                  <td className="py-3">₹2,000</td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="py-3 pr-6">Thivim Railway Station</td>
                  <td className="py-3 pr-6">20 km</td>
                  <td className="py-3 pr-6">~25 minutes</td>
                  <td className="py-3">₹1,200</td>
                </tr>
                <tr className="border-b dark:border-gray-600">
                  <td className="py-3 pr-6">Mapusa Bus Stand</td>
                  <td className="py-3 pr-6">15 km</td>
                  <td className="py-3 pr-6">~20 minutes</td>
                  <td className="py-3">₹900</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Panaji City</td>
                  <td className="py-3 pr-6">25 km</td>
                  <td className="py-3 pr-6">~30 minutes</td>
                  <td className="py-3">₹1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
            For transfer bookings and inquiries, please contact us at least 24 hours in advance.
            Round-trip discounts available.
          </p>
        </div>
      </Section>
      
      {/* Local Area Highlights */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Local <span className="text-gradient">Attractions</span></h2>
          <p className="text-gray-600 dark:text-gray-400">
            Once you've arrived at Wilderest, these nearby attractions are worth exploring.
            Our concierge team can help arrange transportation and guided tours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Arambol Beach",
              distance: "12 km",
              description: "Known for its bohemian atmosphere and beautiful sunsets.",
              image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {
              name: "Chapora Fort",
              distance: "8 km",
              description: "Historic fort offering panoramic views of the Arabian Sea.",
              image: "https://images.pexels.com/photos/5560544/pexels-photo-5560544.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {
              name: "Mapusa Market",
              distance: "15 km",
              description: "Traditional Goan market perfect for local shopping and cuisine.",
              image: "https://images.pexels.com/photos/2377173/pexels-photo-2377173.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {
              name: "Anjuna Beach",
              distance: "10 km",
              description: "Famous for its Wednesday flea market and vibrant atmosphere.",
              image: "https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {
              name: "Spice Plantations",
              distance: "30 km",
              description: "Tour working spice farms and learn about organic cultivation.",
              image: "https://images.pexels.com/photos/4118016/pexels-photo-4118016.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {
              name: "Dudhsagar Waterfall",
              distance: "70 km",
              description: "One of India's tallest waterfalls, perfect for a day trip.",
              image: "https://images.pexels.com/photos/3996340/pexels-photo-3996340.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
          ].map((attraction, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-48 object-cover" 
                />
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{attraction.name}</h3>
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {attraction.distance}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

const TransportOption = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
          <div className="text-primary-600 dark:text-primary-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-gray-700 dark:text-gray-300">
        {content}
      </div>
    </motion.div>
  );
};

export default HowToReachPage;