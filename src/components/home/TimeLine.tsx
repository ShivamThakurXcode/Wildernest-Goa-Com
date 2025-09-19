const timelineData = [
  {
    year: "1988",
    text: "Achieved eco-certification and began conservation programs for the Western Ghats.",
    image: "/Home/2.jpg",
  },
  {
    year: "1986",
    text: "Introduced community-based tourism initiatives, supporting local artisans and culture.",
    image: "/Home/2.jpg",
  },
  {
    year: "1984",
    text: "Expanded to include guided nature trails and wildlife observation experiences.",
    image: "/Home/2.jpg",
  },
  {
    year: "1982",
    text: "Founded as a small eco-lodge in Goa, committed to sustainable tourism practices.",
    image: "/Home/2.jpg",
  },
];

export default function JourneyTimeline() {
  return (
    <section className=" py-20 px-4">
      <div className="text-center mb-20">
        <h3 className="text-xl text-black font-handwriting">
          Our Successful Journey
        </h3>
        <h2 className="text-5xl font-bold text-black relative">
          Know Us
          <span className="absolute text-[120px] top-[-60px] left-1/2 transform -translate-x-1/2 text-black/5 font-bold select-none">
            Journey
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          From humble beginnings to a leading eco-tourism destination, discover
          the milestones that shaped Wildernest Nature Resort into the sanctuary
          it is today.
        </p>
      </div>
      <div className="relative ">
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto gap-y-20">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className="flex flex-col items-center text-center w-[230px]"
            >
              {index % 2 === 0 ? (
                <>
                  <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                  <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                  <div className="w-3 h-3 bg-black rounded-full mb-4"></div>
                  <img
                    src={item.image}
                    alt={item.year}
                    className="w-full rounded-md shadow-md"
                  />
                </>
              ) : (
                <>
                  <img
                    src={item.image}
                    alt={item.year}
                    className="w-full rounded-md shadow-md mb-4"
                  />
                  <div className="w-3 h-3 bg-black rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
