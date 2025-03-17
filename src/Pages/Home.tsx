import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Focus Honey
        </h1>
        <p className="text-center mt-4">
          Pure, natural honey for your daily focus.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
