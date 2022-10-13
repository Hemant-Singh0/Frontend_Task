import React, { Children } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const PrivateComponent = ({ children, ...props }) => {
  const location = useLocation();

  const auth = JSON.parse(localStorage.getItem("Token"));
  if (auth !== null) return children;
  return <Navigate to="/register" state={{ from: location }} replace />;
};

export default PrivateComponent;
