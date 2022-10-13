import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { AiOutlineUserAdd } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { BiLogOutCircle } from "react-icons/bi";

const Index = () => {
  let navigate = useNavigate();
  function removeToken() {
    localStorage.removeItem("registration");
    navigate("/");
  }
  return (
    <>
      <Link to="/home" className="CWP">
        <h1>CRUD WITH PROPS</h1>
      </Link>
      <BiLogOutCircle size={40} className="Token" onClick={removeToken}>
        Logout
      </BiLogOutCircle>
      <hr />
    </>
  );
};

export default Index;
