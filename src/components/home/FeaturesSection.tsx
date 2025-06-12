import { Mountain, Compass, MapPin } from "lucide-react";

const features = [
  {
    title: "Famous Hill Stations",
    description:
      "Euismod in pellentesque massa placerat duis ultricies lacus. Faucibus a pellentesque sit amet, porttitor eget dolor morbi. Purus gravida quis.",
    icon: (
      <Mountain
        size={48}
        className="text-white border-4 border-white rounded-full p-2"
      />
    ),
    image: "/Home/2.jpg",
  },
  {
    title: "Boat Visiting Place",
    description:
      "At ultrices mi tempus imperdiet. Sed ullamcorper morbi tincidunt ornare massa. Tortor aliquam nulla facilisi cras. Et ultrices neque ornare.",
    icon: <Compass size={48} className="text-white" />,
    image: "/Home/4.jpg",
  },
  {
    title: "Best Hiking Place",
    description:
      "Maecenas pharetra convallis posuere morbi leo urna molestie at. Lacus vel facilisis volutpat est velit egestas dui id. Ullamcorper morb.",
    icon: <MapPin size={48} className="text-white" />,
    image: "/Home/3.jpg",
  },
];

const FeatureSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative text-white flex items-center justify-center px-8 py-16 min-h-[400px]"
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center max-w-xs">
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
