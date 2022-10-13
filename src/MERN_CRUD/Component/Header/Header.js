import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const removeToken = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand path">
            <img
              src="https://img.icons8.com/nolan/48/warning-shield.png"
              width="30"
              className="logo"
            />
            &nbsp;&nbsp;&nbsp; MERN CRUD
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link to="/" className="nav-link path">
                Dashboard
              </Link>
              <Link to="/adddata" className="nav-link path">
                Add Data
              </Link>
              <Link to="/alldata" className="nav-link path">
                All Data
              </Link>
              <button className="Button" onClick={removeToken}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
