import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const adventures = [
  {
    title: "KAYAKING",
    description:
      "Explore tranquil rivers and winding waters with thrilling kayaking adventures.",
    image: "./Home/2.jpg",
  },
  {
    title: "HIKING",
    description:
      "Trek through scenic trails and reconnect with nature on foot.",
    image: "./Home/3.jpg",
  },
  {
    title: "MOUNTAIN CLIMBING",
    description:
      "Conquer rugged peaks with exciting mountain climbing challenges.",
    image: "./Home/4.jpg",
  },
  {
    title: "FOREST ADVENTURE",
    description: "Dive into the wilderness and explore the lush green forests.",
    image: "./Home/5.jpg",
  },
];

export default function AdventureIdeasSection() {
  return (
    <section className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="text-center mb-20">
        <h3 className="text-xl text-black font-handwriting">
          Find your best adventure
        </h3>
        <h2 className="text-5xl font-bold text-black relative">
          Adventure Ideas
          <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 font-bold select-none">
            Travel
          </span>
        </h2>
      </div>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {adventures.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center px-6">
              <div className="w-60 h-60 mb-6 rounded-full overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full bg-cover bg-center object-cover"
                />
              </div>
              <h3 className="text-xl font-extrabold tracking-wider mb-2 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                {item.description}
              </p>
              <button className="bg-black text-white rounded-full px-6 py-2 text-sm tracking-wider hover:opacity-90 transition-all duration-300">
                ENQUIRE
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
