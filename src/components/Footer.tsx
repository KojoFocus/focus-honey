const Footer = () => {
  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <div className="container mx-auto text-center">
        <p>© 2023 Focus Honey. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-primary">
            Facebook
          </a>
          <a href="#" className="hover:text-primary">
            Instagram
          </a>
          <a href="#" className="hover:text-primary">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
