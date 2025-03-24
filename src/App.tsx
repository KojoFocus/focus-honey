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
