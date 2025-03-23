import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react"; // Import social media icons from Lucide React
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-[#636363]  text-white py-8">
      {/* Container */}
      <div className="container mx-auto px-6 space-y-8">
        {/* Logo and Social Media Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex-grow flex items-center justify-center md:justify-start">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Focus Honey</span>
              <img
                alt="Focus Honey Logo"
                src="/images/logo.png" // Replace with your logo path
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
            >
              <FacebookIcon size={24} />
            </a>
            <a
              href="https://instagram.com" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
            >
              <InstagramIcon size={24} />
            </a>
            <a
              href="https://twitter.com" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
            >
              <TwitterIcon size={24} />
            </a>
            <a
              href="https://linkedin.com" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Focus Honey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
