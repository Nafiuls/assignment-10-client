import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const TableRow = ({ game, index, setGameData, gameData }) => {
  const { _id, title, userName } = game;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/review-delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Deleted Successfully!");
        }
        const newData = gameData.filter((game) => game._id != id);
        setGameData(newData);
      })
      .catch((error) => console.log(error));
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{userName}</td>
      <td className="flex items-center gap-5">
        <Link to={`/edit/${_id}`} className="btc p-2 rounded-md">
          <TfiWrite data-tooltip-id="my-tooltip" data-tooltip-content="Edit" />
        </Link>
        <Link onClick={() => handleDelete(_id)} className="btc p-2 rounded-md">
          <FaRegTrashAlt
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Delete"
          />
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
