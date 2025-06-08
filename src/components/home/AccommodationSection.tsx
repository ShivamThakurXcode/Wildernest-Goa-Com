import { ArrowUpRight } from "lucide-react";

const accommodationPackages = [
  {
    title: "Family Valley View",
    type: "2 Adults + 2 Children",
    price: "$299/night",
    image: "./Home/4.jpg",
    highlight: "Panoramic valley views",
  },
  {
    title: "Family Waterfall View",
    type: "2 Adults + 2 Children",
    price: "$349/night",
    image: "./Home/5.jpg",
    highlight: "Private waterfall access",
  },
  {
    title: "Forest View Cottage",
    type: "Couple Retreat",
    price: "$229/night",
    image: "./Home/6.jpg",
    highlight: "Secluded forest immersion",
  },
  {
    title: "Valley View Cottage",
    type: "Couple Retreat",
    price: "$259/night",
    image: "./Home/7.jpg",
    highlight: "Sunrise valley vistas",
  },
  {
    title: "Waterfall View Suite",
    type: "Luxury Experience",
    price: "$399/night",
    image: "./Home/8.jpg",
    highlight: "Premium waterfall facing",
  },
  {
    title: "Executive Valley Villa",
    type: "Family Premium",
    price: "$459/night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    highlight: "Exclusive valley privacy",
  },
];

const AccommodationSection = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Accommodation Packages
          </h2>
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-black group">
            View All Packages
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodationPackages.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-md relative group transition hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200 mb-1">{item.type}</p>
                <p className="text-xs text-emerald-300 font-medium">
                  {item.highlight}
                </p>
                <p className="mt-2 font-bold text-white text-lg">
                  {item.price}
                </p>
              </div>

              {/* Arrow Icon Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <ArrowUpRight className="text-gray-800 group-hover:text-white w-5 h-5 rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
