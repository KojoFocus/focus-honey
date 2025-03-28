import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#636363] text-center">
      {/* Remove the Header component - it's already in App.tsx */}

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Gold Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#facc15] to-[#b45309] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          {/* Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/hero.png"
              alt="Focus Honey - Pure and Natural"
              className="w-full max-w-[200px] sm:max-w-[250px]"
            />
          </div>

          {/* Button */}
          <div className="mt-20">
            <Link
              to="/products"
              className="inline-block rounded-lg border border-[#f5d08c] px-6 py-3 text-sm font-semibold text-[#f5d08c] hover:bg-[#f5d08c] hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
              Go to Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
