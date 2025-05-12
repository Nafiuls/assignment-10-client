import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const UseAuth = () => {
  const value = useContext(authContext);
  return value;
};

export default UseAuth;
