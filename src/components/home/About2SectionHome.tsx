import { ArrowRight, Leaf, Palmtree, Star, Waves } from "lucide-react";

const ResortSectionFirst = () => {
  const resortImage = "./Home/3.jpg";

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('./cta-bg.svg')`,
      }}
      className="relative py-20 px-4 sm:px-6 bg-cover bg-center  bg-no-repeat"
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Text Section */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
            <p className="text-sm font-medium text-amber-400 mb-3 uppercase tracking-wider">
              Luxury Meets Nature
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Unforgettable Experiences <br /> at{" "}
              <span className="text-amber-400">Wilderest Goa</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-gray-200 text-lg leading-relaxed">
                Nestled along Goa's pristine coastline, Wilderest Resort offers
                a perfect blend of luxury and nature, where you can unwind
                amidst palm trees and golden sands.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our eco-friendly resort is committed to sustainable tourism
                while providing world-class amenities and unparalleled comfort.
              </p>
            </div>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Palmtree className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <p className="text-gray-100 text-lg">
                  Private beach access with exclusive cabanas and sunset views
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <p className="text-gray-100 text-lg">
                  Eco-conscious resort with sustainable practices
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Waves className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <p className="text-gray-100 text-lg">
                  Award-winning spa with organic treatments
                </p>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Your Stay
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 hover:border-amber-400 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300">
                Explore Villas
              </button>
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-auto shadow-2xl">
            <img
              src={resortImage}
              alt="Luxury resort in Goa with palm trees and pool"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            {/* Rating badge */}
            <div className="absolute bottom-6 right-6 bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-xl shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-white/20">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="text-white">
                  <p className="text-xl font-bold">5.0</p>
                  <p className="text-xs font-light opacity-80">Guest Rating</p>
                </div>
              </div>
            </div>

            {/* Location tag */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white flex items-center gap-2">
                <Palmtree className="w-4 h-4 text-amber-400" />
                <span>Goa, India</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResortSectionFirst;
