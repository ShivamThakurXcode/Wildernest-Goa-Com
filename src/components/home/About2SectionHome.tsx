import { ArrowRight, Leaf, Sun } from "lucide-react";

const SolarEnergySection = () => {
  // Replace with your actual image path
  const solarHouseImage = "./Home/3.jpg";

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Text Section */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-emerald-600 mb-2">
              More Energy More Savings
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Energy Savings Made Easy With Solar
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Solar energy harnesses the sun's renewable power to provide clean,
              sustainable electricity for your home while reducing your carbon
              footprint and energy bills.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Solar energy harnesses the sun's renewable power to provide clean,
              sustainable electricity for your home while reducing your carbon
              footprint and energy bills.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <p className="text-gray-700">
                  Provides insight into budget performance and long-term savings
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <p className="text-gray-700">
                  Reduces carbon emissions by up to 80% compared energy
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <p className="text-gray-700">
                  Reduces carbon emissions by up to 80% compared energy
                </p>
              </li>
            </ul>

            <button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
              Plan Your Trip
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column - Image Section */}
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-auto shadow-sm">
            <img
              src={solarHouseImage}
              alt="Modern eco-friendly house with solar panels"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-white font-medium">
                  Making everything from solar
                </p>
              </div>
              <div className="w-20 h-20 rounded-full border-4 border-emerald-400 flex items-center justify-center ml-auto">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">700 kV</p>
                  <p className="text-xs text-emerald-200">SAVING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarEnergySection;
