import Header from "../components/Header"; // Import your existing Header component

const ProductPage = () => {
  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20">
      {/* Header */}
      <header className="relative z-50 pb-5">
        <Header />
      </header>

      {/* Search Bar Section */}
      <div className="mt-12 px-6 pt-20">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
            placeholder="Search for honey"
          />
        </div>
      </div>

      {/* Product List */}
      <div className="mt-10 px-6 lg:px-8">
        {" "}
        {/* Add lg:px-8 for larger screens */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {" "}
          {/* Grid layout for larger screens */}
          {/* Product Card 1 */}
          <div className="bg-[#4d4d4d] rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src="/images/hero1.png" // Replace with your actual product image path
                alt="Pure Honey"
                className="w-32 h-32 object-cover rounded-lg"
                onError={(e) => (e.currentTarget.style.display = "none")} // Hide broken images
              />
              <div>
                <h3 className="text-lg font-semibold">Pure Honey</h3>
                <p className="text-xl mt-2">Ghc 100</p>
                <button className="mt-4 inline-block rounded-lg border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-[#4d4d4d] rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src="/images/p2.png" // Replace with your actual product image path
                alt="Raw Honey"
                className="w-32 h-32 object-cover rounded-lg"
                onError={(e) => (e.currentTarget.style.display = "none")} // Hide broken images
              />
              <div>
                <h3 className="text-lg font-semibold">Raw Honey</h3>
                <p className="text-xl mt-2">Ghc 120</p>
                <button className="mt-4 inline-block rounded-lg border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-[#4d4d4d] rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src="/images/p1.png" // Replace with your actual product image path
                alt="Organic Honey"
                className="w-32 h-32 object-cover rounded-lg"
                onError={(e) => (e.currentTarget.style.display = "none")} // Hide broken images
              />
              <div>
                <h3 className="text-lg font-semibold">Organic Honey</h3>
                <p className="text-xl mt-2">Ghc 150</p>
                <button className="mt-4 inline-block rounded-lg border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* Add more product cards as needed */}
          {/* Product Card 4 */}
          <div className="bg-[#4d4d4d] rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src="/images/hero1.png" // Replace with your actual product image path
                alt="Premium Honey"
                className="w-32 h-32 object-cover rounded-lg"
                onError={(e) => (e.currentTarget.style.display = "none")} // Hide broken images
              />
              <div>
                <h3 className="text-lg font-semibold">Premium Honey</h3>
                <p className="text-xl mt-2">Ghc 175</p>
                <button className="mt-4 inline-block rounded-lg border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* Product Card 5 */}
          <div className="bg-[#4d4d4d] rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src="/images/p2.png" // Replace with your actual product image path
                alt="Honey Supreme"
                className="w-32 h-32 object-cover rounded-lg"
                onError={(e) => (e.currentTarget.style.display = "none")} // Hide broken images
              />
              <div>
                <h3 className="text-lg font-semibold">Honey Supreme</h3>
                <p className="text-xl mt-2">Ghc 200</p>
                <button className="mt-4 inline-block rounded-lg border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* Product Card 6 */}
          <div className="bg-[#4d4d4d] rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src="/images/p1.png" // Replace with your actual product image path
                alt="Honey Deluxe"
                className="w-32 h-32 object-cover rounded-lg"
                onError={(e) => (e.currentTarget.style.display = "none")} // Hide broken images
              />
              <div>
                <h3 className="text-lg font-semibold">Honey Deluxe</h3>
                <p className="text-xl mt-2">Ghc 225</p>
                <button className="mt-4 inline-block rounded-lg border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
