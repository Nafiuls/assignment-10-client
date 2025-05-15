import React from "react";
import Heading from "../../utils/Heading";
import Card from "../../components/Card";

const Highest = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Heading
        title={"Highest Rated Reviews"}
        text={
          " Discover the top-rated games based on player reviews and ratings. These games have captured the hearts of players worldwide, offering unforgettable experiences and breathtaking gameplay."
        }
      />
      {/* card section */}
      <div className="grid gap-5 lg:px-20 p-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {data?.map((game) => (
          <Card key={game?._id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Highest;
