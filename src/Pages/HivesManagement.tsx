const HivesManagement = () => {
  return (
    <div className="bg-[#636363] text-center text-white min-h-screen pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-12 pt-40">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">
          Hives Management
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Text */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              Effective hives management is at the core of sustainable
              beekeeping. At Focus Farms, we prioritize the health and
              productivity of our hives through innovative techniques and
              careful monitoring.
            </p>
            <p className="text-lg text-gray-300">
              Our approach includes regular inspections, disease prevention, and
              optimal hive placement to ensure healthy bee colonies and maximum
              honey production.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/hives-management.png" // Update the image path as needed
              alt="Hives Management"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HivesManagement;
