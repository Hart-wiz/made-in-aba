import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../components/pageControl";

const Notfound = () => {
  return (
    <>
      <PageControl />

      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white text-center px-4">
        <h1 className="text-9xl font-extrabold text-red-500 animate-bounce">
          {" "}
          Oops!
        </h1>
        <p className="text-2xl mt-4 mb-2">Page not found.</p>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <p className="text-gray-400 mb-6">You may find what you need here?</p>

        <div className="p-4 m-8">
          <Link
            to="/about"
            className=" text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Business listings
          </Link>

          <Link
            to="/about"
            className=" text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Reports
          </Link>

          <Link
            to="/about"
            className=" text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Products alert
          </Link>
        </div>
      </div>

      <Link
        to="/"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300"
      >
        Go Back Home
      </Link>
    </>
  );
};

export default Notfound;
