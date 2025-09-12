import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { cn } from "../../lib/utils"; // Assuming relative path to utils.ts

// Define the activities offered, based on the context of Wildernest Nature Resort
// focusing on nature, community, and the Western Ghats.
const activities = [
  {
    id: 1,
    title: "Guided Nature Walks",
    description:
      "Explore the ancient rainforests and discover hidden trails with our expert naturalists.",
    image: "./activities/nature-walk.webp", // Placeholder image path
  },
  {
    id: 2,
    title: "Bird Watching Expeditions",
    description:
      "Spot rare avian species in their natural habitat, a paradise for bird lovers.",
    image: "./activities/bird-watching.webp", // Placeholder image path
  },
  {
    id: 3,
    title: "Local Folk Performances",
    description:
      "Immerse yourself in the vibrant culture with traditional music and dance by local communities.",
    image: "./activities/folk-performance.webp", // Placeholder image path
  },
  {
    id: 4,
    title: "Naturalist-Led Talks",
    description:
      "Learn about the unique ecosystem of the Western Ghats and its conservation efforts.",
    image: "./activities/naturalist-talk.webp", // Placeholder image path
  },
  {
    id: 5,
    title: "Waterfall & River Treks",
    description:
      "Journey to pristine waterfalls and serene riverbanks, a refreshing escape into nature.",
    image: "./activities/waterfall-trek.webp", // Placeholder image path
  },
  {
    id: 6,
    title: "Community Village Visits",
    description:
      "Connect with local villagers and experience their way of life, supporting sustainable tourism.",
    image: "./activities/village-visit.webp", // Placeholder image path
  },
];

const ActivitiesIntegration = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('./hero-dark.svg')`,
        }}
        className="absolute inset-0 bg-cover bg-center opacity-30"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title and Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Immersive Experiences in the Western Ghats
          </h2>
          <p className="text-lg text-gray-300">
            Embark on guided nature walks, engage with local culture, and
            explore the rich biodiversity that defines Wildernest.
          </p>
        </div>

        {/* Slider Container */}
        <div className="w-[90%] mx-auto rounded-4xl shadow-lg p-6 md:p-10 bg-gray-800/70 backdrop-blur-sm border border-gray-700">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3500, // Automatic slide every 3.5 seconds
              disableOnInteraction: false, // Autoplay continues even after user interaction
              pauseOnMouseEnter: true, // Pause autoplay when mouse hovers over the slider
            }}
            pagination={{
              clickable: true, // Allow clicking on pagination dots
              dynamicBullets: true, // Dynamic bullet size for a modern look
            }}
            navigation={true} // Enable navigation arrows
            modules={[Autoplay, Pagination, Navigation]}
            loop={true} // Loop slides for a continuous effect
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper" // Custom class for potential styling overrides in global CSS
          >
            {activities.map((activity) => (
              <SwiperSlide key={activity.id}>
                <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-300 text-base">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesIntegration;
