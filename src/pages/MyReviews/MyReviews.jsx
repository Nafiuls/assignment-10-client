import React, { useEffect, useState } from "react";
import Heading from "../../utils/Heading";
import UseAuth from "../../utils/CustomHooks/UseAuth";
import TableRow from "../../components/TableRow";

const MyReviews = () => {
  const { user } = UseAuth();
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setGameData(data))
      .catch((error) => console.log(error));
  }, [user]);
  return (
    <div className=" p-4 h-screen flex flex-col items-center mt-10">
      <Heading
        title={"My Game Reviews"}
        text={
          "Here are all the reviews you’ve shared with the community. Revisit your thoughts, edit if needed, or simply keep track of your gaming journey."
        }
      />
      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 lg:w-3xl">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Reviwer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gameData?.map((game, index) => (
                <TableRow
                  gameData={gameData}
                  setGameData={setGameData}
                  key={game._id}
                  index={index}
                  game={game}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
