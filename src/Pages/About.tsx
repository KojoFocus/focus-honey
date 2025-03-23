import { CheckCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-12 pt-40">
        {/* Our Mission */}
        <section>
          <h2 className="text-4xl font-semibold text-center mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            At Focus Farms, we believe in the incredible potential of bees to
            create sustainable solutions for the world. Through eco-friendly
            beekeeping practices, we aim to empower communities, protect
            ecosystems, and provide pure, natural bee products.
          </p>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-4xl font-semibold text-center mb-8">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Sustainable Beekeeping */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/sustainablebeekeeping.png" // Adjust the path as needed
                alt="Sustainable Beekeeping"
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border-4 border-white"
              />
              <h3 className="text-xl font-semibold mb-2">
                Sustainable Beekeeping
              </h3>
            </div>

            {/* Card 2: Pure Honey & Bee Products */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/honeyandbeeproducts.png" // Adjust the path as needed
                alt="Pure Honey & Bee Products"
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border-4 border-white"
              />
              <h3 className="text-xl font-semibold mb-2">
                Pure Honey & Bee Products
              </h3>
            </div>

            {/* Card 3: Training & Education */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/trainingandeducation.png" // Adjust the path as needed
                alt="Training & Education"
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border-4 border-white"
              />
              <h3 className="text-xl font-semibold mb-2">
                Training & Education
              </h3>
            </div>

            {/* Card 4: Eco-Friendly Methods */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/ecofriendlymethods.png" // Adjust the path as needed
                alt="Eco-Friendly Methods"
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border-4 border-white"
              />
              <h3 className="text-xl font-semibold mb-2">
                Eco-Friendly Methods
              </h3>
            </div>
          </div>
        </section>

        {/* Why Choose Us? */}
        <section>
          <h2 className="text-4xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reason 1: Pure and Natural */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CheckCircleIcon className="w-16 h-16 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-4">Pure and Natural</h3>
              <p className="text-gray-700">
                Our products are 100% natural, free from additives and
                preservatives, ensuring you get the best nature has to offer.
              </p>
            </div>

            {/* Reason 2: Community Impact */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <UsersIcon className="w-16 h-16 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p className="text-gray-700">
                We work closely with local communities to promote sustainable
                practices and create economic opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-6">
            Discover the power of bees with Focus Honey. Explore our products,
            learn about sustainable beekeeping, and be part of the change.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-lg bg-[#f5d08c] px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-colors duration-300"
          >
            Talk to Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
