import React from "react";
import UseAuth from "../CustomHooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) return <Spinner />;
  if (!user)
    return <Navigate state={{ from: location.pathname }} to={"/login"} />;

  return children;
};

export default PrivateRoute;
