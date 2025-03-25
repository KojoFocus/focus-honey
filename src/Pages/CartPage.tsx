// Define the CartItem type
type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
  quantity: number;
};

interface CartPageProps {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartPage = ({
  cartItems,
  removeFromCart,
  updateQuantity,
}: CartPageProps) => {
  // Calculate total price
  const calculateTotal = (): number => {
    return cartItems.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("Ghc ", "")) * item.quantity,
      0
    );
  };

  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-12 pt-40">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">Your Cart</h2>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#4d4d4d] rounded-lg p-6 shadow-md"
              >
                <div className="flex flex-col md:flex-row items-center space-x-6 md:space-x-4">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-xl mt-2">
                      Price: Ghc {parseFloat(item.price.replace("Ghc ", ""))}
                    </p>
                    <div className="mt-4 flex items-center space-x-2">
                      <button
                        className="inline-block rounded-lg bg-[#f5d08c] px-3 py-2 text-sm md:text-base font-semibold text-gray-800 hover:bg-yellow-500 transition-colors duration-300"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        className="inline-block rounded-lg bg-[#f5d08c] px-3 py-2 text-sm md:text-base font-semibold text-gray-800 hover:bg-yellow-500 transition-colors duration-300"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-4 inline-block rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600 transition-colors duration-300"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="col-span-3 text-center text-gray-400">
            Your cart is empty.
          </p>
        )}

        {/* Checkout Section */}
        {cartItems.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>
                    Ghc{" "}
                    {parseFloat(item.price.replace("Ghc ", "")) * item.quantity}
                  </span>
                </li>
              ))}
              <li className="flex justify-between font-bold">
                <span>Total:</span>
                <span>Ghc {calculateTotal()}</span>
              </li>
            </ul>
            <div className="mt-6">
              <button
                className="inline-flex items-center rounded-lg bg-[#f5d08c] px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-colors duration-300"
                onClick={() => {
                  const phoneNumber = "+233540484052"; // Replace with your WhatsApp number
                  let message = `Hello! Please I want:\n\n`;
                  cartItems.forEach((item) => {
                    message += `${item.quantity} x ${item.name}\n`;
                  });
                  message += `\nTotal: Ghc ${calculateTotal()}\n\n`;
                  message += "Quantity: \nDelivery Address: \nContact Number: ";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
