import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

// Define the BaseProduct type
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
  quantity: number;
};

interface ProductsPageProps {
  addToCart: (product: Product) => void; // Prop to receive the addToCart function
}

const products: Product[] = [
  {
    id: 1,
    name: "Pure Honey",
    price: "Ghc 100",
    image: "/images/hero1.png",
    alt: "Pure Honey",
    quantity: 0,
  },
  {
    id: 2,
    name: "Raw Honey",
    price: "Ghc 120",
    image: "/images/p2.png",
    alt: "Raw Honey",
    quantity: 0,
  },
  // ... other products
];

const ProductsPage = ({ addToCart }: ProductsPageProps) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  };

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
        <Header cartCount={0} />
      </header>

      {/* Search Bar Section */}
      <SearchBar onSearch={handleSearch} />

      {/* Product List */}
      <div className="mt-10 px-6 lg:px-8">
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#4d4d4d] rounded-lg p-6 shadow-md"
              >
                <div className="flex flex-col md:flex-row items-center space-x-6 md:space-x-4">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-xl mt-2">{product.price}</p>

                    {/* Buttons Container */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-start md:justify-center">
                      {/* Primary Button (Buy Now) */}
                      <button
                        className="inline-block rounded-lg bg-[#f5d08c] px-3 py-2 text-sm md:text-base font-semibold text-gray-800 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-colors duration-300"
                        onClick={() => redirectToWhatsApp(product.name)}
                      >
                        Buy Now
                      </button>

                      {/* Secondary Button (Add to Cart) */}
                      <button
                        className="inline-block rounded-lg border border-[#f5d08c] px-3 py-2 text-sm md:text-base font-semibold text-[#f5d08c] hover:bg-[#f5d08c] hover:text-gray-800 transition-colors duration-300"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
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
