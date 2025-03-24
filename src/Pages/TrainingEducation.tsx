const TrainingEducation = () => {
  return (
    <div className="bg-[#636363] text-center text-white min-h-screen pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-12 pt-40">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">
          Training & Education
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Text */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              We believe in empowering communities through education. Our
              training programs teach individuals and groups about sustainable
              beekeeping practices, hive management, and honey production.
            </p>
            <p className="text-lg text-gray-300">
              Whether you're a beginner or an experienced beekeeper, our
              workshops and resources are designed to help you succeed.
            </p>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/trainingandeducation.png"
              alt="Training Session"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/images/ecofriendlymethods.png"
              alt="Workshop"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingEducation;
