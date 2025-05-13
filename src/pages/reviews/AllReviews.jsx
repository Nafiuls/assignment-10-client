import React from "react";
import Heading from "../../utils/Heading";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";

const AllReviews = () => {
  const data = useLoaderData();
  return (
    <div className=" flex flex-col justify-center">
      <Heading
        text={
          "Explore a growing collection of honest game reviews from real players. From blockbusters to hidden gems, discover what others think before you hit play."
        }
        title={"All reviews"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
        {data.map((game) => (
          <Card key={game?._id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
