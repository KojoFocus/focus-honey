import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        hasScrolled ? "bg-[#636363] shadow-md" : "bg-transparent"
      } transition-all duration-300`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        {/* Left Section: Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-white hover:bg-white/20 rounded-md"
        >
          <Bars3Icon className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </button>

        {/* Centered Logo */}
        <Link to="/" className="flex-1 flex justify-center">
          <img
            src="/images/logo.png"
            alt="Focus Honey Logo"
            className={`h-16 transition-all duration-300 ${
              hasScrolled ? "h-12" : "h-16"
            }`}
          />
        </Link>

        {/* Right Section: Cart with Persistent Count */}
        <div className="relative">
          <Link
            to="/cart"
            className="p-2 text-white hover:bg-white/20 rounded-md inline-flex"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#f5d08c] text-gray-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/20 backdrop-blur-lg transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          {["Home", "About", "Products", "Cart", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block py-2 px-3 text-white font-medium rounded hover:bg-white/20"
              onClick={() => setIsSidebarOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/products"
            className="mt-4 inline-block bg-[#f5d08c] text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
