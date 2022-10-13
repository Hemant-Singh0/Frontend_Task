import React, { useState } from "react";
import Login from "./login";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../Component/Services/AuthServices/authServices";
import { toast } from "react-toastify";

const LoginFunction = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError({});
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isValid = () => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let formData = true;
    switch (true) {
      case !formValues.email:
        setError({ email: "Email field is required!" });
        formData = false;
        break;
      case formValues.email && !regex.test(formValues.email):
        setError({ email: "Please enter valid email address!" });
        formData = false;
        break;
      case !formValues.password:
        setError({ password: "Password field is required!" });
        formData = false;
        break;
      default:
        formData = true;
    }
    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await loginUser(formValues);
      if (res.status == 200) {
        localStorage.setItem("Token", JSON.stringify(res.data));
        toast("Saved Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      } else {
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  return (
    <>
      <Login
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </>
  );
};

export default LoginFunction;
