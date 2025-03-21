import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link from React Router

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Navigation Bar */}
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Left Section: Toggle Button */}
        <div className="flex items-center">
          {/* Toggle Button for Sidebar */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Centered Logo */}
        <div className="flex-grow flex items-center justify-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Focus Honey</span>
            <img
              alt="Focus Honey Logo"
              src="/images/logo.png" // Replace with your logo path
              className="h-16 w-auto" // Larger logo size
            />
          </Link>
        </div>

        {/* Right Section: Shop Now Icon */}
        <div className="flex items-center">
          <Link to="/products" className="text-white">
            <ShoppingCartIcon className="size-6" />
            <span className="sr-only">Shop Now</span>
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white/20 backdrop-blur-lg h-[50vh] rounded-lg transition-transform duration-300 ease-in-out`}
      >
        {/* Header Section of Sidebar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/20">
          {/* Logo in Sidebar */}
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Focus Honey</span>
            <img
              alt="Focus Honey Logo"
              src="/images/logo.png" // Replace with your logo path
              className="h-8 w-auto"
            />
          </Link>
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close sidebar</span>
            <XMarkIcon aria-hidden="true" className="size-6 text-white" />
          </button>
        </div>

        {/* Content Section of Sidebar */}
        <div className="px-6 py-4 space-y-4">
          {/* Navigation Links */}
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
              to="/contact"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50/50"
            >
              Contact
            </Link>
          </div>
          <div className="mt-10">
            <Link
              to="/products" // Link to the Products Page
              className="inline-block rounded-lg bg-[#f5d08c] px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
              Shop Now
            </Link>
          </div>

          {/* Call-to-Action Button */}
          <div>
            {/* <Link
              to="/products"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50/50"
            >
              Shop Now
            </Link> */}
          </div>
        </div>
      </div>

      {/* Overlay to Dim Background When Sidebar is Open */}
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
