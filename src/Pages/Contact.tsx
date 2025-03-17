import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
