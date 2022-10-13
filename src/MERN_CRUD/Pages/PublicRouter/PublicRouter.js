import React, { Children } from "react";
import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";

const PrivateComponent = ({ children, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const auth = JSON.parse(localStorage.getItem("Token"));

  if (auth == null) return children;
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateComponent;
