const HoneyProcessing = () => {
  return (
    <div className="bg-[#636363] text-center text-white min-h-screen pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-12 pt-40">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">
          Honey Processing & Sales
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Text */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              Our honey processing techniques are designed to preserve the
              natural qualities of honey. From extraction to bottling, we ensure
              that no additives or preservatives are used.
            </p>
            <p className="text-lg text-gray-300">
              Our honey is carefully harvested, filtered, and packaged to
              deliver the purest product to your table. Taste the difference
              with our 100% natural honey!
            </p>
          </div>

          {/* Right Column: Video */}
          <div className="flex justify-center items-center">
            <video controls className="w-full h-auto rounded-lg shadow-md">
              <source src="/videos/honey-processing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoneyProcessing;
