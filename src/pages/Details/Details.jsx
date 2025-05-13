import React from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../../utils/Heading";
import { FaStar } from "react-icons/fa";
import UseAuth from "../../utils/CustomHooks/UseAuth";
import toast from "react-hot-toast";

const Details = () => {
  const { user } = UseAuth();
  const game = useLoaderData();
  const {
    _id,
    image,
    title,
    review,
    gameRating,
    publishingYear,
    genre,
    userName,
    userEmail,
  } = game;

  //   add to watchlist fnc

  const handleWatchlist = () => {
    const watchlist = {
      id: _id,
      image,
      title,
      review,
      gameRating,
      publishingYear,
      genre,
      reviewerName: userName,
      reviewerEmail: userEmail,
      userName: user?.displayName,
      userEmail: user?.email,
    };
    fetch("http://localhost:5000/add-watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added to watchlist!");
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Heading title={"Review Details"} />
      <div className="bg-[#1A1E29] border w-full lg:w-2xl p-4 rounded-lg mt-10  ">
        <div className="items-center lg:justify-normal gap-10 justify-center flex lg:flex-row flex-col    ">
          {/* image */}
          <img
            className="rounded-xl object-center w-full h-full lg:w-[300px]  object-cover"
            src={image}
            alt=""
            srcSet=""
          />
          {/* content */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className=" gap-2 font-medium flex items-center">
              Rating:
              <span className="flex items-center gap-1">
                <FaStar color="orange" size={18} /> {gameRating}
              </span>
            </p>
            <p className=" gap-2 font-medium flex items-center">
              Genre: {genre}
            </p>
            <p className=" gap-2 font-medium flex items-center">
              Publishing Year: {publishingYear}
            </p>
            <p className=" gap-2 font-medium flex items-center">
              Reviewer: {userName}
            </p>
            <p className=" gap-2 font-medium flex items-center">
              Reviewer Email: {userEmail}
            </p>
            {user && (
              <button
                onClick={handleWatchlist}
                className="cursor-pointer btc rounded-md py-2 px-5 font-medium"
              >
                Add to Watchlist
              </button>
            )}
          </div>
        </div>
        <hr className="my-5 gap-2 font-medium flex items-center" />
        <p className="text-2xl font-bold mb-4">Descreption:</p>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Details;
