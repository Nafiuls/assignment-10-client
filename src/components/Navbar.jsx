import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../utils/CustomHooks/UseAuth";

const Navbar = () => {
  const { user, handleLogout } = UseAuth();
  const routes = [
    { path: "/", name: "home" },
    { path: "/reviews", name: "reviews" },
    { path: "/addReviews", name: "add Reviews" },
    { path: "/myReviews", name: "my Reviews" },
    { path: "/watchlist", name: "watchlist" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
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
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">PlayVibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex items-center flex-row gap-5 font-medium capitalize">
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
          </div>
        ) : (
          <button className="bg-[#ffd447] text-[#1A1A1A] px-8 rounded-sm cursor-pointer hover:bg-[#E6BD3F] py-2 font-medium">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
