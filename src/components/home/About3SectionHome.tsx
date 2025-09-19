import { ArrowRight, Leaf, Palmtree } from "lucide-react";

const ResortSection = () => {
  const resortImage = "./Home/3.jpg";

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Text Section */}
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-auto shadow-sm">
            <img
              src={resortImage}
              alt="Luxury resort in Goa with palm trees and pool"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center justify-center bottom-4 right-4 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Palmtree className="w-5 h-5  text-orange-400" />
                </div>
                <p className="text-white font-medium">
                  Goa's premier eco-luxury destination
                </p>
              </div>
              <div className="p-3 rounded-full border-2 border-orange-500 mb-3 flex items-center justify-center ml-auto">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">5★</p>
                  <p className="text-xs text-orange-200">RATING</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-orange-600 mb-2">
              Luxury Meets Nature
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Unforgettable Experiences at Wildernest Goa
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nestled along Goa's pristine coastline, Wildernest Resort offers a
              perfect blend of luxury and nature, where you can unwind amidst
              palm trees and golden sands while enjoying world-class amenities.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our eco-friendly resort is committed to sustainable tourism while
              providing you with the ultimate in comfort and relaxation.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <Palmtree className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <p className="text-gray-700">
                  Private beach access with exclusive cabanas and sunset views
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <p className="text-gray-700">
                  Eco-conscious resort with sustainable practices and green
                  spaces
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <p className="text-gray-700">
                  Award-winning spa with organic treatments and yoga pavilion
                </p>
              </li>
            </ul>

            <button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
              Book Your Stay
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResortSection;
