import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../Component/Services/AuthServices/authServices";
import { toast } from "react-toastify";
import Register from "./Register";

const RegisterFunction = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    number: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError({});
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isValid = () => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const phoneRegex = /^\d{10}$/;
    const decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const formData = true;
    switch (true) {
      case !formValues.firstname:
        setError({ firstname: "First Name Is Required!" });
        formData = false;
        break;
      case !formValues.lastname:
        setError({ lastname: "Last Name Is Required!" });
        formData = false;
        break;
      case !formValues.number:
        setError({ number: "Please Fill Number" });
        formData = false;
        break;
      case formValues.number && !phoneRegex.test(formValues.number):
        setError({ number: "Please Fill valid Number" });
        formData = false;
        break;
      case !formValues.email:
        setError({ email: "Email field Is Required!" });
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
      case formValues.password && !decimal.test(formValues.password):
        setError({
          password:
            "8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
        });
        formData = false;
        break;
      case !formValues.confirmPassword:
        setError({ confirmPassword: "Confirm Password field is required!" });
        formData = false;
        break;
      case formValues.confirmPassword !== formValues.password:
        setError({ confirmPassword: "Password not Matched" });
        formData = false;
        break;
      default:
      // formData = true;
    }
    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await register(formValues);
      console.log("res::::::::::", res);
      if (res.status == 200) {
        navigate("/login");
        toast("Saved Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(res.message, {
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
      <Register
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </>
  );
};

export default RegisterFunction;
