const SustainableBeekeeping = () => {
  return (
    <div className="bg-[#636363] text-center text-white min-h-screen pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-12 pt-40">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">
          Sustainable Beekeeping
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Text */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              At Focus Farms, we practice sustainable beekeeping methods that
              prioritize the health of bees and the environment. Our approach
              ensures minimal interference with natural ecosystems while
              maximizing the benefits of beekeeping.
            </p>
            <p className="text-lg text-gray-300">
              We use eco-friendly tools and techniques to support the growth of
              healthy bee colonies. By doing so, we contribute to biodiversity,
              pollination, and the production of pure, natural honey.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/sustainablebeekeeping.png"
              alt="Sustainable Beekeeping"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableBeekeeping;
