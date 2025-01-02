'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-900 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-6">
        {/* Logo Section */}
        <div>
          <h1 className="text-4xl text-white font-bold font-serif">
          Tech<span className="text-orange-500">Tonic</span>
          </h1>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex space-x-8 sm:flex-row flex-col sm:space-x-8 space-y-4 sm:space-y-0 sm:flex items-center ${
            isMenuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <Link
            href="/"
            className="text-white text-xl font-semibold hover:text-orange-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-white text-lg font-semibold hover:text-orange-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            href="/blogs"
            className="text-white text-lg font-semibold hover:text-orange-400 transition-colors duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/cart"
            className="text-white text-lg font-semibold hover:text-orange-400 transition-colors duration-300"
          >
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
