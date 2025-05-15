import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../utils/CustomHooks/UseAuth";
import { Fade } from "react-awesome-reveal";

const Navbar = ({ isHomePage, isWhite, toggle }) => {
  const { user, handleLogout } = UseAuth();
  const routes = [
    { path: "/", name: "home" },
    { path: "/reviews", name: "reviews" },
    { path: "/addReviews", name: "add Reviews" },
    { path: "/myReviews", name: "my Reviews" },
    { path: "/watchlist", name: "watchlist" },
  ];
  return (
    <Fade direction="down">
      <div className="navbar bg-transparent shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="pl-5 space-y-3 overflow-hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Fade cascade damping={0.2} direction="left">
                {routes.map((item) => (
                  <NavLink
                    className={
                      "hover:scale-120 hover:text-[#ffd447] transition-all text-white"
                    }
                    to={item.path}
                    key={item.name}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </Fade>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-extrabold">PlayVibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex items-center flex-row gap-12 font-light text-base uppercase ">
            <Fade cascade damping={0.1} direction="down">
              {routes.map((item) => (
                <NavLink
                  className={
                    "hover:scale-200 hover:text-[#ffd447] transition-all text-white"
                  }
                  to={item.path}
                  key={item.name}
                >
                  {item.name}
                </NavLink>
              ))}
            </Fade>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  className="w-12 rounded-full"
                >
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button
                onClick={() => handleLogout()}
                className="btc py-2 cursor-pointer px-5 rounded-sm"
              >
                Log out
              </button>
              {/* toggle theme */}
              <div>
                {isHomePage && (
                  <button
                    onClick={toggle}
                    className="px-4 py-2 cursor-pointer rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                  >
                    {isWhite ? "Dark Mode" : "Light Mode"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              {" "}
              <button className="bg-[#ffd447] text-[#1A1A1A] px-8 rounded-sm cursor-pointer hover:bg-[#E6BD3F] py-2 font-medium">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default Navbar;
