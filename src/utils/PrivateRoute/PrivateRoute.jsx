import React from "react";
import UseAuth from "../CustomHooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) return <h1>Loading......</h1>;
  if (!user)
    return <Navigate state={{ from: location.pathname }} to={"/login"} />;

  return children;
};

export default PrivateRoute;
