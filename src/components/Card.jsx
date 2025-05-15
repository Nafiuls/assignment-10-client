import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ game }) => {
  const { _id, image, review, gameRating, title, publishingYear } = game;
  return (
    <div className="bg-[#1A1E29] text-white rounded-2xl shadow-lg p-3 ">
      {/* Game Image */}
      <div className="h-[250px]">
        <img
          src={image}
          alt="Game"
          className="rounded-xl h-full object-cover mb-4 w-full  "
        />
      </div>

      <div className="mt-4">
        {/* Game Title */}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {/* Game Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {review.slice(0, 100)}
        </p>
        <p className=" gap-2 font-medium flex items-center">
          Rating:
          <span className="flex items-center gap-1">
            <FaStar color="orange" size={18} /> {gameRating}
          </span>
        </p>
        <p className=" gap-2 font-medium flex items-center">
          Publishing Year: {publishingYear}
        </p>
        {/* Explore Button */}
        <Link to={`/details/${_id}`}>
          <button className="bg-[#FFD447] mt-5 cursor-pointer text-black font-semibold px-5 py-2 rounded-md hover:brightness-110 transition-all">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
