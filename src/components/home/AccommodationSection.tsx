import { ArrowUpRight, Users, Heart, UserPlus } from "lucide-react";

const accommodationPackages = [
  {
    title: "Forest View Cottage",
    type: "Couple Retreat",
    price: "₹7,800/night",
    image: "./Home/6.jpg",
    highlight: "Secluded forest immersion",
    favorite: true,
  },
  {
    title: "Valley View Cottage",
    type: "Couple Retreat",
    price: "₹8,800/night",
    image: "./Home/7.jpg",
    highlight: "Sunrise valley vistas",
    favorite: true,
  },
  {
    title: "Family Valley View",
    type: "For 4 Adults",
    price: "₹13,000/night",
    image: "./Home/4.jpg",
    highlight: "Panoramic valley views",
    favorite: true,
  },
  {
    title: "Private Plunge Pool (Valley view)",
    type: "Couple Retreat",
    price: "₹11,000/night",
    image: "./Home/5.jpg",
    highlight: "Private plunge pool",
    favorite: true,
  },
  {
    title: "Private Plunge Pool (Valley view-AC)",
    type: "Couple Retreat",
    price: "₹13,500/night",
    image: "./Home/8.jpg",
    highlight: "Private AC plunge pool",
    favorite: true,
  },
];

const AccommodationSection = () => {
  return (
    <section className="bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-xl text-black font-handwriting">
            Find your perfect stay
          </h3>
          <h2 className="text-5xl font-bold text-black relative">
            Our Accommodations
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 font-bold select-none">
              Retreats
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Experience comfort amidst nature with our carefully curated
            selection of cottages and villas, each offering unique views and
            amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodationPackages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.favorite && (
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md">
                    <Heart className="w-5 h-5 text-amber-600 fill-amber-600" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="flex items-center text-white/90 mt-1">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-0.5 bg-amber-400 mr-3"></div>
                  <p className="text-sm font-medium text-amber-600">
                    {item.highlight}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <p className="text-xs text-gray-500">+ taxes & fees</p>
                  </div>
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-amber-500 transition-colors"
                    aria-label={`View ${item.title} details`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Extra Information Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden flex flex-col h-full">
            <div className="bg-amber-50 p-6 flex items-center">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <UserPlus className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Extra Guest Information
              </h3>
            </div>
            <div className="p-6 flex-grow">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-amber-500 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">Extra Adult Charge:</span>{" "}
                    ₹3,000 per night
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-amber-500 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">Children Policy:</span>{" "}
                    Children under 12 stay free
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-amber-500 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">Maximum Occupancy:</span>{" "}
                    Varies by room type
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-amber-50 rounded-lg p-4">
                <p className="text-xs text-amber-800">
                  Note: All rates are subject to 18% GST. Additional charges may
                  apply for extra amenities.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full py-3 bg-gradient-to-tl from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                Get Inquiry
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
