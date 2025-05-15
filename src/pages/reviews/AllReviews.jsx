import React, { useEffect, useState } from "react";
import Heading from "../../utils/Heading";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

const AllReviews = () => {
  const data = useLoaderData();
  const [sortedData, setSortedData] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const genres = [...new Set(data.map((game) => game.genre))];
  useEffect(() => {
    if (!data || data.length === 0) return;
    setLoading(true);
    let sorted = [...data];
    if (selectedGenre) {
      sorted = sorted.filter((game) => game.genre === selectedGenre);
    }

    if (sortOption === "year") {
      sorted.sort(
        (a, b) => parseInt(b.publishingYear) - parseInt(a.publishingYear)
      );
    }
    if (sortOption === "rating") {
      sorted.sort((a, b) => b.gameRating - a.gameRating);
    }
    setSortedData(sorted);
    setLoading(false);
  }, [sortOption, data, selectedGenre]);

  if (loading) return <Spinner />;
  return (
    <div className="flex flex-col max-w-6xl mx-auto justify-center">
      <Heading
        text={
          "Explore a growing collection of honest game reviews from real players. From blockbusters to hidden gems, discover what others think before you hit play."
        }
        title={"All reviews"}
      />
      <div className="mb-10 mx-auto flex items-center gap-5">
        <div>
          <select
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="year">Sort by Year</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
        <div>
          <select
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Filter by Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
        {sortedData.map((game) => (
          <Card key={game?._id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
