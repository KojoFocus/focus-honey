import Header from "../components/Header"; // Import your existing Header component
import SearchBar from "../components/SearchBar";

const ProductPage = () => {
  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20">
      {/* Header */}
      <header className="relative z-50 pb-5">
        <Header />
      </header>

      {/* Search Bar Section */}
      <SearchBar />

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
