import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = [
    {
      title: "Wildflower Honey",
      description: "Rich in antioxidants.",
      price: "$10",
      image: "/images/wildflower.jpg",
    },
    {
      title: "Manuka Honey",
      description: "Boosts immunity.",
      price: "$15",
      image: "/images/manuka.jpg",
    },
    {
      title: "Clover Honey",
      description: "Mild and sweet.",
      price: "$8",
      image: "/images/clover.jpg",
    },
  ];
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
