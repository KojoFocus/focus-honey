import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import your existing Header component
import HomePage from "./Pages/Home"; // Import your Home Page
import AboutPage from "./Pages/About"; // Import your About Page
import ProductsPage from "./Pages/ProductsPage"; // Import your Products Page
import ContactPage from "./Pages/Contact"; // Import your Contact Page
import Footer from "./components/Footer";

// Import the new "What We Do" pages
import SustainableBeekeeping from "./Pages/SustainableBeekeeping";
import HoneyProcessing from "./Pages/HoneyProcessing";
import TrainingEducation from "./Pages/TrainingEducation";
import HivesManagement from "./Pages/HivesManagement";

// Import the Cart Page
import CartPage from "./Pages/CartPage";

// Define the Product type globally
export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
  quantity: number; // Add quantity property
};

const App = () => {
  const [cart, setCart] = useState<Product[]>([]); // State to manage the cart

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, increase its quantity
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Otherwise, add the product to the cart with initial quantity 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <Router>
      {/* Pass the cart count to the Header */}
      <Header cartCount={cart.length} />

      {/* Main Content with Routing */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Products Page */}
        <Route
          path="/products"
          element={<ProductsPage addToCart={addToCart} />}
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* What We Do Pages */}
        <Route
          path="/sustainable-beekeeping"
          element={<SustainableBeekeeping />}
        />
        <Route
          path="/pure-honey-and-bee-products"
          element={<HoneyProcessing />}
        />
        <Route path="/training-and-education" element={<TrainingEducation />} />
        <Route path="/hives-management" element={<HivesManagement />} />
      </Routes>

      {/* Footer is shared across all pages */}
      <Footer />
    </Router>
  );
};

export default App;
