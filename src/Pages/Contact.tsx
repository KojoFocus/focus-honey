const ContactPage = () => {
  return (
    <div className="bg-[#636363] text-white min-h-screen pb-20">
      {/* Main Content - Header removed since it's in App.tsx */}
      <div className="container mx-auto px-6 space-y-12 pt-20">
        {/* Contact Form */}
        <section>
          <h2 className="text-4xl font-semibold text-center mb-8">
            Get in Touch
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block rounded-lg bg-[#f5d08c] px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-4xl font-semibold mb-8">Contact Us</h2>
          <div className="space-y-4">
            <p>Email: info@focushoney.com</p>
            <p>Phone: +233 540 484 052</p>
            <p>Address: Teiman Borga-Town, Accra</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
