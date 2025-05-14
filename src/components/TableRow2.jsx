import React from "react";

const TableRow2 = ({ game, index }) => {
  const {
    image,
    title,
    gameRating,
    reviewerName,
    reviewerEmail,
    genre,
    publishingYear,
  } = game;
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{gameRating}</td>
      <td>{reviewerName}</td>
      <td>{reviewerEmail}</td>
      <td>{genre}</td>
      <td>{publishingYear}</td>
    </tr>
  );
};

export default TableRow2;
