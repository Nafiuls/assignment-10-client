import React from "react";
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-8"
      style={{ backgroundColor: "#0e1525" }}
    >
      <h1 className="text-[100px] sm:text-[140px] font-extrabold text-[#ffd447] leading-none">
        404
      </h1>
      <h2 className="text-2xl sm:text-4xl font-semibold mt-4 mb-3">
        Page Not Found
      </h2>
      <p className="text-base sm:text-lg max-w-xl mb-6">
        {error?.statusText ||
          error?.message ||
          "The page you’re looking for doesn’t exist or has been moved."}
      </p>
      <Link to="/">
        <button className="px-6 py-2 text-[#0e1525] bg-[#ffd447] font-semibold rounded-md transition-all hover:brightness-90">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
