import { ArrowUpRight, Users, Heart } from "lucide-react";

const accommodationPackages = [
  {
    title: "Family Valley View",
    type: "2 Adults + 2 Children",
    price: "₹19,999/night",
    image: "./Home/4.jpg",
    highlight: "Panoramic valley views",
    favorite: true,
  },
  {
    title: "Family Waterfall View",
    type: "2 Adults + 2 Children",
    price: "₹24,999/night",
    image: "./Home/5.jpg",
    highlight: "Private waterfall access",
    favorite: false,
  },
  {
    title: "Forest View Cottage",
    type: "Couple Retreat",
    price: "₹14,999/night",
    image: "./Home/6.jpg",
    highlight: "Secluded forest immersion",
    favorite: true,
  },
  {
    title: "Valley View Cottage",
    type: "Couple Retreat",
    price: "₹16,999/night",
    image: "./Home/7.jpg",
    highlight: "Sunrise valley vistas",
    favorite: false,
  },
  {
    title: "Waterfall View Suite",
    type: "Luxury Experience",
    price: "₹29,999/night",
    image: "./Home/8.jpg",
    highlight: "Premium waterfall facing",
    favorite: true,
  },
  {
    title: "Executive Valley Villa",
    type: "Family Premium",
    price: "₹34,999/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    highlight: "Exclusive valley privacy",
    favorite: false,
  },
];

const AccommodationSection = () => {
  return (
    <section className="bg-cover bg-center  py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-xl text-black font-handwriting">
            Find your best adventure
          </h3>
          <h2 className="text-5xl font-bold text-black relative">
            Adventure Ideas
            <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 font-bold select-none">
              Package
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            tempora error. Eum itaque eius eaque odit nemo illum aspernatur
            quia.
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
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-amber-500 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center">
            View All Accommodations
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
