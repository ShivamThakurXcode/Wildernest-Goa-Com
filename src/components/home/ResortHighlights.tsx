import {
  MapPin,
  Umbrella,
  Mountain,
  Bike,
  Ship,
  MountainIcon,
} from "lucide-react";

const ResortHighlights = () => {
  const features = [
    {
      id: 1,
      title: "Best Destinations",
      icon: <MapPin className="w-8 h-8" />,
      description:
        "Suspendisse interdum consectetur libero id. Blandit libero volut ornare",
    },
    {
      id: 2,
      title: "Beaches",
      icon: <Umbrella className="w-8 h-8" />,
      description:
        "Purus viverra accumsan in nisi nisi scelerisque eu nunc mi ultrices",
    },
    {
      id: 3,
      title: "Hiking",
      icon: <Mountain className="w-8 h-8" />,
      description:
        "Quam adipiscing vitae proin sagittis nisi rhoncus mattis rhon odio",
    },
    {
      id: 4,
      title: "Cycling",
      icon: <Bike className="w-8 h-8" />,
      description:
        "Vivamus arcu felis bibendum ut tristique et egestas quis sapien",
    },
    {
      id: 5,
      title: "Boating",
      icon: <Ship className="w-8 h-8" />,
      description:
        "Laoreet sit amet cursus sit amet dictum sit amet ut eu sem integ",
    },
    {
      id: 6,
      title: "Trekking",
      icon: <MountainIcon className="w-8 h-8" />,
      description:
        "Uitricies integer quis auctor elit sed xulputate mi sit amet leo a",
    },
  ];

  return (
    <section className="relative bottom-10 bg-gradient-to-b from-white/5 to-[#f6f2e9] py-20 overflow-hidden">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden rotate-180">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-12 text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            opacity="1"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative p-8 group hover:bg-white/30 transition-all duration-300 rounded-xl"
            >
              {/* Background number */}
              <span className="absolute -top-4 left-4 text-[100px] font-bold text-gray-300/30 -z-10">
                {feature.id.toString().padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-amber-600 text-3xl  flex items-center justify-center md:justify-start">
                  {feature.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden rotate-180">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-12 text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            opacity="1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ResortHighlights;
