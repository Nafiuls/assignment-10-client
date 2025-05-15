import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isWhite, setIsWhite] = useState(false);
  const toggle = () => setIsWhite(!isWhite);

  return (
    <div className={`${isHomePage && isWhite ? "bg-white text-black" : ""}`}>
      <Navbar isHomePage={isHomePage} isWhite={isWhite} toggle={toggle} />
      <div className="mb-10 min-h-screen">
        <Outlet />
      </div>
      <Toaster />
      <Tooltip id="my-tooltip" />
      <Footer />
    </div>
  );
};

export default MainLayout;
