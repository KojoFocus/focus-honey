// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Products from "./Pages/Products";
// import Contact from "./Pages/Contact";

import HomePage from "./Pages/Home";
// import ServicesPage from "./Pages/Services";

// import ContactPage from "./Pages/Contact";

// import Home from "./Pages/Home";

import AboutPage from "./Pages/About";

// import ProductPage from "./Pages/ProductPage";

// import HeroSection from "./components/HeroSection";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      {/* <HeroSection /> */}
      {/* <ProductPage /> */}

      {/* <Home /> */}
      {/* <ContactPage /> */}
      {/* <ServicesPage /> */}
      <HomePage />
      <AboutPage />
    </>
  );
};

export default App;
