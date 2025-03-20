// import Header from "../components/Header"; // Import your existing Header component

const AboutPage = () => {
  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20">
      {/* Header Section */}
      {/* <header className="relative z-50 pb-10">
        <Header />
      </header> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-12 pt-40">
        {" "}
        {/* Increased padding from top */}
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
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Sustainable Beekeeping
              </h3>
              <p className="text-sm">
                We practice eco-friendly beekeeping methods that prioritize the
                health of bees and the environment.
              </p>
            </div>

            {/* Card 2: Pure Honey & Bee Products */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Pure Honey & Bee Products
              </h3>
              <p className="text-sm">
                Our range includes pure honey, infused honey, and other
                bee-derived products for health and wellness.
              </p>
            </div>

            {/* Card 3: Training & Education */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Training & Education
              </h3>
              <p className="text-sm">
                We train individuals and communities in sustainable beekeeping
                practices to promote livelihoods and environmental stewardship.
              </p>
            </div>

            {/* Card 4: Eco-Friendly Methods */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Eco-Friendly Methods
              </h3>
              <p className="text-sm">
                Our operations are guided by environmentally conscious practices
                to ensure minimal impact on nature.
              </p>
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
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800">
              <h3 className="text-xl font-semibold mb-4">Pure and Natural</h3>
              <p className="text-sm">
                Our honey and bee products are free from additives, ensuring you
                receive the purest form of nature's goodness.
              </p>
            </div>

            {/* Reason 2: Community Impact */}
            <div className="bg-[#f5d08c] rounded-lg p-6 text-center text-gray-800">
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p className="text-sm">
                By supporting us, you contribute to sustainable livelihoods and
                environmental conservation efforts.
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
          <a
            href="#shop"
            className="inline-block rounded-lg bg-[#f5d08c] px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            Talk to Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
