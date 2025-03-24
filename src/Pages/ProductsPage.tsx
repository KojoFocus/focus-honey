import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const products = [
  {
    id: 1,
    name: "Pure Honey",
    price: "Ghc 100",
    image: "/images/hero1.png",
    alt: "Pure Honey",
  },
  {
    id: 2,
    name: "Raw Honey",
    price: "Ghc 120",
    image: "/images/p2.png",
    alt: "Raw Honey",
  },
  {
    id: 3,
    name: "Organic Honey",
    price: "Ghc 150",
    image: "/images/p1.png",
    alt: "Organic Honey",
  },
  {
    id: 4,
    name: "Premium Honey",
    price: "Ghc 175",
    image: "/images/hero1.png",
    alt: "Premium Honey",
  },
  {
    id: 5,
    name: "Honey Supreme",
    price: "Ghc 200",
    image: "/images/p2.png",
    alt: "Honey Supreme",
  },
  {
    id: 6,
    name: "Honey Deluxe",
    price: "Ghc 225",
    image: "/images/p1.png",
    alt: "Honey Deluxe",
  },
];

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle search query
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  };

  // Function to handle WhatsApp redirection
  const redirectToWhatsApp = (productName: string) => {
    const phoneNumber = "+233540484052"; // Replace with your WhatsApp number
    const message = encodeURIComponent(
      `Hello! Please I want ${productName}.\n\nQuantity: \nDelivery Address: \nContact Number: `
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20">
      {/* Header */}
      <header className="relative z-50 pb-5">
        <Header />
      </header>

      {/* Search Bar Section */}
      <SearchBar onSearch={handleSearch} />

      {/* Product List */}
      <div className="mt-10 px-6 lg:px-8">
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-[#4d4d4d] rounded-lg p-6">
                <div className="flex items-center space-x-6">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-32 h-32 object-cover rounded-lg"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-xl mt-2">{product.price}</p>
                    <button
                      className="mt-4 inline-block rounded-lg border border-[#f5d08c] px-4 py-2 text-[#f5d08c] hover:bg-[#f5d08c] hover:text-gray-800"
                      onClick={() => redirectToWhatsApp(product.name)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-400">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
