import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { path: "/", name: "home" },
    { path: "/reviews", name: "reviews" },
    { path: "/addReviews", name: "add Reviews" },
    { path: "/myReviews", name: "my Reviews" },
    { path: "/watchlist", name: "watchlist" },
  ];
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <a class="btn btn-ghost text-xl">PlayVibe</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu flex items-center flex-row gap-5 font-medium capitalize">
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
      <div class="navbar-end">
        <button className="bg-[#ffd447] text-[#1A1A1A] px-8 rounded-sm cursor-pointer hover:bg-[#E6BD3F] py-2 font-medium">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
