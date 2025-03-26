import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
  quantity: number;
};

interface ProductsPageProps {
  addToCart: (product: Product) => void;
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
];

const ProductsPage = ({ addToCart }: ProductsPageProps) => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeNotification, setActiveNotification] = useState<{
    productId: number | null;
    message: string;
  }>({ productId: null, message: "" });

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  };

  const redirectToWhatsApp = (productName: string) => {
    const phoneNumber = "+233540484052";
    const message = encodeURIComponent(
      `Hello! Please I want ${productName}.\n\nQuantity: \nDelivery Address: \nContact Number: `
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setActiveNotification({
      productId: product.id,
      message: `1 ${product.name} added to cart!`,
    });

    setTimeout(() => {
      setActiveNotification({ productId: null, message: "" });
    }, 3000);
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20 relative">
      {/* Header */}
      <header className="relative z-40 pb-5">
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
                className="bg-[#4d4d4d] rounded-lg p-6 shadow-md relative"
              >
                {/* Notification for this specific product */}
                {activeNotification.productId === product.id && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#f5d08c] text-gray-800 px-4 py-2 rounded-lg shadow-lg z-10 flex items-center gap-2 whitespace-nowrap">
                    <span>{activeNotification.message}</span>
                    <button
                      onClick={handleViewCart}
                      className="font-bold underline hover:text-gray-600 text-sm"
                    >
                      View
                    </button>
                  </div>
                )}

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

                    <div className="mt-4 flex flex-wrap gap-2 justify-start md:justify-center">
                      <button
                        className="inline-block rounded-lg bg-[#f5d08c] px-3 py-2 text-sm md:text-base font-semibold text-gray-800 hover:bg-yellow-500 transition-colors duration-300"
                        onClick={() => redirectToWhatsApp(product.name)}
                      >
                        Buy Now
                      </button>

                      <button
                        className="inline-block rounded-lg border border-[#f5d08c] px-3 py-2 text-sm md:text-base font-semibold text-[#f5d08c] hover:bg-[#f5d08c] hover:text-gray-800 transition-colors duration-300"
                        onClick={() => handleAddToCart(product)}
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
