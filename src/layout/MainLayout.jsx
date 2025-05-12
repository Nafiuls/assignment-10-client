import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Outlet />
      </div>
      <Toaster />
      <Tooltip id="my-tooltip" />
      <Footer />
    </>
  );
};

export default MainLayout;
