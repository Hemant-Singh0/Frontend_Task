import React, { Children } from "react";
import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";

const PrivateComponent = ({ children, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const auth = JSON.parse(localStorage.getItem("register"));
  if (auth !== null) return children;
  return <Navigate to="/register" state={{ from: location }} replace />;
};

export default PrivateComponent;
