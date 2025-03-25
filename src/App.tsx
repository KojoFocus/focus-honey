import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ProductsPage from "./Pages/ProductsPage";
import ContactPage from "./Pages/Contact";
import Footer from "./components/Footer";
import SustainableBeekeeping from "./Pages/SustainableBeekeeping";
import HoneyProcessing from "./Pages/HoneyProcessing";
import TrainingEducation from "./Pages/TrainingEducation";
import HivesManagement from "./Pages/HivesManagement";
import CartPage from "./Pages/CartPage";

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
  quantity: number;
};

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <Router>
      <Header cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/products"
          element={<ProductsPage addToCart={addToCart} />}
        />
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
        <Route path="/contact" element={<ContactPage />} />
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

      <Footer />
    </Router>
  );
};

export default App;
