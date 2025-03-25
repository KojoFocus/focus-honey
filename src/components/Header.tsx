import { useState } from "react";
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

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Left Section: Toggle Button */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="size-6" />
          </button>
        </div>

        {/* Centered Logo */}
        <div className="flex-grow flex items-center justify-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Focus Honey</span>
            <img
              alt="Focus Honey Logo"
              src="/images/logo.png"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Right Section: Cart Icon */}
        <div className="relative flex items-center">
          <Link to="/cart" className="text-white">
            <ShoppingCartIcon className="size-6" />
            <span className="sr-only">View Cart</span>
          </Link>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#f5d08c] text-gray-800 text-xs font-semibold px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white/20 backdrop-blur-lg 
          h-[50vh] rounded-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/20">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              alt="Focus Honey Logo"
              src="/images/logo.png"
              className="h-8 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <XMarkIcon className="size-6 text-white" />
          </button>
        </div>

        <div className="px-6 py-4 space-y-4">
          <div className="space-y-2">
            <Link
              to="/"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50/50"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50/50"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50/50"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50/50"
            >
              Cart
            </Link>
            <Link
              to="/contact"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50/50"
            >
              Contact
            </Link>
          </div>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-block rounded-lg bg-[#f5d08c] px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-yellow-500"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
