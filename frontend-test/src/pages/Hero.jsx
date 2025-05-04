import React from "react";
import { Link, useLocation } from "react-router-dom";
import image1 from "../assets/images533.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                Made IN Aba
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Products
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                About
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Contact
              </a>
              <Link
                to="/auth/buyer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              >
                My Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl gap-1em">
              <span className="block">Welcome to</span>
              <span className="block text-indigo-600">Made IN Aba</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover amazing products at unbeatable prices. Shop now and
              experience the best in online shopping.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/auth/buyer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <div className="w-full h-full object-center object-cover group-hover:opacity-75 bg-gray-300 animate-pulse"></div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Product {product}</h3>
              <img src={image1} />
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${(product * 19.99).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            &copy; 2025 Made IN Aba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
