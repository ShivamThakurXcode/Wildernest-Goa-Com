import { ArrowUpRight } from "lucide-react";

const accommodationPackages = [
  {
    title: "Canoe Adventure",
    type: "Thailand",
    price: "₹24,999/night",
    image: "./Home/4.jpg",
    highlight: "Waterfall serenity",
  },
  {
    title: "Wild Safari",
    type: "India",
    price: "₹19,499/night",
    image: "./Home/5.jpg",
    highlight: "Close animal encounters",
  },
  {
    title: "Mountain Climbing",
    type: "Kerala",
    price: "₹22,999/night",
    image: "./Home/6.jpg",
    highlight: "Breathtaking summit trek",
  },
  {
    title: "Kayaking",
    type: "USA",
    price: "₹18,999/night",
    image: "./Home/7.jpg",
    highlight: "Peaceful lake ride",
  },
  {
    title: "Zip Line",
    type: "Australia",
    price: "₹27,499/night",
    image: "./Home/8.jpg",
    highlight: "Thrill in the skies",
  },
  {
    title: "Canal Ride",
    type: "California",
    price: "₹21,499/night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    highlight: "Romantic paddle journey",
  },
];

const AccommodationSection = () => {
  return (
    <section className="bg-[#f9f6ef] py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm text-gray-600 mb-2">Enjoy with your love</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Find your best <br className="sm:hidden" /> destinations
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {accommodationPackages.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5 text-left flex flex-col flex-grow justify-between">
              <h3 className="text-md font-bold uppercase text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.type} 📍</p>
              <p className="text-xs text-orange-500 mt-1 mb-1 font-medium">
                {item.highlight}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-gray-800">
                  {item.price}
                </span>
                <div className="bg-black text-white p-2 rounded-full shadow-md hover:bg-orange-500 transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm px-6 py-2 rounded-full shadow-md">
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default AccommodationSection;
