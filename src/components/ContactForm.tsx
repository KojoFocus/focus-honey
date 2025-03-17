const ContactForm = () => {
  return (
    <form className="form-control w-full max-w-md">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className="input input-bordered w-full"
      />
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="input input-bordered w-full"
      />
      <label className="label">
        <span className="label-text">Message</span>
      </label>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Enter your message"
      ></textarea>
      <button type="submit" className="btn btn-primary mt-4">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
