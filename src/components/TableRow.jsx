import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TableRow = ({ game, index }) => {
  const { title, userName } = game;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{userName}</td>
      <td className="flex items-center gap-5">
        <Link className="btc p-2 rounded-md">
          <TfiWrite data-tooltip-id="my-tooltip" data-tooltip-content="Edit" />
        </Link>
        <Link className="btc p-2 rounded-md">
          <FaRegTrashAlt
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Edit"
          />
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
