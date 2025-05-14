import React, { useEffect, useState } from "react";
import Heading from "../../utils/Heading";
import UseAuth from "../../utils/CustomHooks/UseAuth";
import TableRow2 from "../../components/TableRow2";

const Watchlist = () => {
  const { user } = UseAuth();
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/watchlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setGameData(data))
      .catch((error) => console.log(error));
  }, [user]);
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Heading
        title={"Watchlist"}
        text={
          " Explore all the game reviews you've personally added in one place. Your curated list keeps track of your thoughts and favorites—just the way you like it."
        }
      />
      {/* table */}
      <div className=" rounded-box border table-sm border-base-content/5 bg-base-100 lg:w-3xl">
        <table className="overflow-x-auto table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>image</th>
              <th>title</th>
              <th>Rating</th>
              <th>Reviwer</th>
              <th>email</th>
              <th>genre</th>
              <th>Publishing year</th>
            </tr>
          </thead>
          <tbody>
            {gameData.map((game, index) => (
              <TableRow2 key={game._id} game={game} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
