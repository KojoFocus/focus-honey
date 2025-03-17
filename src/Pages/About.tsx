import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">
          At Focus Honey, we believe in providing the purest honey to help you
          stay focused and energized throughout the day.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
