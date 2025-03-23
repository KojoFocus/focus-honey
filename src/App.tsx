import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import your existing Header component
import HomePage from "./Pages/Home"; // Import your Home Page
import AboutPage from "./Pages/About"; // Import your About Page
import ProductsPage from "./Pages/ProductPage"; // Import your Products Page
import ContactPage from "./Pages/Contact"; // Import your Contact Page
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* Header is shared across all pages */}
      <Header />

      {/* Main Content with Routing */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Products Page */}
        <Route path="/products" element={<ProductsPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
