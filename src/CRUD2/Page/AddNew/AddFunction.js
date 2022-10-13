import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Index from "./AddIndex";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Function = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  const checkValidation = () => {
    let formErrors = {};
    let isValid = true;
    if (!user.name) {
      isValid = false;
      formErrors["name"] = "Name Is Required.....";
    } else if (!user.phone) {
      isValid = false;
      formErrors["phone"] = "Number Is Required.....";
    } else if (!user.email) {
      isValid = false;
      formErrors["email"] = "Email Is Required.....";
    }
    setError(formErrors);
    return isValid;
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      const res = await axios.post("http://localhost:3000/registers", user);
      setValidation(res.validation);
      toast.success("Add Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  };

  return (
    <>
      <Index
        user={user}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        error={error}
        // show={show}
        // handleClose={handleClose}
      />
    </>
  );
};

export default Function;
