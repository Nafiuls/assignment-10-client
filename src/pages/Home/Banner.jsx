import React from "react";
import bg from "../../assets/bg.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "650px", // or any height you want
        width: "100%",
      }}
    ></div>
  );
};

export default Banner;
