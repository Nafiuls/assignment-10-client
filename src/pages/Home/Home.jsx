import React from "react";
import Banner from "./Banner";
import Highest from "./Highest";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      {/* highest rated reviews */}
      <Highest data={data} />
    </div>
  );
};

export default Home;
