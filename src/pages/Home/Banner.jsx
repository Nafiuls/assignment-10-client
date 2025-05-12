import React from "react";
import bg from "../../assets/bg.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "650px", // or any height you want
        width: "100%",
      }}
    >
      {/* content */}
      <div className="flex items-center flex-col justify-center h-full">
        <h1 className="text-7xl leading-20 lg:px-10 text-center font-extrabold">
          Game Reviews, <br /> Minus the Noise
        </h1>
        <p className="max-w-3xl text-center text-xl mt-5">
          "Find honest reviews, chill discussions, and the games that suit your
          vibe. Whether you're a casual player or a late-night grinder, we’ve
          built this space for you"
        </p>
        <Link to={"/reviews"}>
          <button className="btc mt-5 text-xl font-medium transition-all cursor-pointer px-10 py-2 rounded-sm">
            Browse Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
