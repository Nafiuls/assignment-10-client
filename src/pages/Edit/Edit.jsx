import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UseAuth from "../../utils/CustomHooks/UseAuth";
import toast from "react-hot-toast";

const Edit = () => {
  const { user } = UseAuth();
  const data = useLoaderData();
  const [rating, setRating] = useState(null);
  const [year, setYear] = useState("");
  const {
    _id,
    image,
    title,
    review,
    gameRating,
    userName,
    userEmail,
    publishingYear,
    genre,
  } = data;
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const image = form.image.value;
    const title = form.title.value;
    const review = form.review.value;
    const gameRating = rating;
    const publishingYear = year;
    const genre = form.genre.value;
    const data = {
      userName,
      userEmail,
      image,
      title,
      review,
      gameRating: Number(gameRating),
      publishingYear,
      genre,
    };
    fetch(`https://assignment-10-server-omega-mauve.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Update Successfull");
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="w-full flex mt-5 flex-col gap-5 rounded-lg lg:w-lg  bg-[#1A1E29] p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Add New Review</h1>
        <div className="w-full">
          <p className="mb-2 font-semibold">Cover Image:</p>
          <input
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white "
            type="text"
            name="image"
            defaultValue={image}
            placeholder="Photo URL"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 font-semibold">Title</p>
          <input
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white "
            type="text"
            name="title"
            placeholder="Game Title"
            defaultValue={title}
          />
        </div>
        <div className="w-full">
          <p className="mb-2 font-semibold">Review Description:</p>
          <textarea
            defaultValue={review}
            placeholder="Review Description"
            name="review"
            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-[#262B39] text-white placeholder-gray-400 focus:outline-none  focus:border-transparent min-h-[120px] resize-none"
          ></textarea>
        </div>
        <div>
          <p className="mb-2 font-semibold">Rating:</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <input
                defaultValue={gameRating}
                key={num}
                type="radio"
                name="rating"
                value={num}
                className="mask mask-star-2 bg-yellow-400"
                onChange={(e) => setRating(e.target.value)}
              />
            ))}
          </div>
          {rating && <p className="mt-2">You rated: {rating} star(s)</p>}
        </div>
        <div className="w-full">
          <p className="mb-2 font-semibold">Publishing Year:</p>
          <input
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white"
            type="number"
            name="year"
            min="1970"
            onChange={(e) => setYear(e.target.value)}
            max={new Date().getFullYear()}
            placeholder="e.g., 2024"
            defaultValue={publishingYear}
          />
        </div>
        <div className="w-full">
          <p className="mb-2 font-semibold">Genre:</p>
          <select
            name="genre"
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white"
          >
            <option value={genre} disabled>
              Select a genre
            </option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
          </select>
        </div>
        <div className="w-full">
          <p className="mb-2 font-semibold">User Email:</p>
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white cursor-not-allowed"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 font-semibold">User Email:</p>
          <input
            type="text"
            name="name"
            value={user?.displayName || ""}
            readOnly
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white cursor-not-allowed"
          />
        </div>
        <button className="btc py-2 mt-3 text-lg font-medium rounded-md cursor-pointer">
          Update Review
        </button>
      </form>
    </div>
  );
};

export default Edit;
