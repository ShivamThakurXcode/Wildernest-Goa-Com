const ActivitiesIntegration = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('./hero-dark.svg')`,
      }}
      className="py-2 bg-cover bg-center   bg-gray-200 w-[90%] mx-auto rounded-4xl shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="hidden md:block">
            {/* <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/integrations/3/top-logos.png"
              alt="Activity partners"
            /> */}
            <img
              className="w-full mt-8"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/integrations/3/left-logos.png"
              alt="More activity partners"
            />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
              Connect with 50+ Activities in Goa
            </h2>
            <p className="text-lg text-gray-400">
              From water sports to jungle treks, we partner with the best
              activity providers in Goa to bring you unforgettable experiences.
            </p>
          </div>

          <div className="hidden md:block">
            {/* <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/integrations/3/bottom-logos.png"
              alt="Activity providers"
            /> */}
            <img
              className="w-full mt-8"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/integrations/3/right-logos.png"
              alt="More activity providers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesIntegration;
