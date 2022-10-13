import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  let navigate = useNavigate();
  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let formErrors = {};
    let isValid = true;
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;

    if (!inputValues.fName) {
      isValid = false;
      formErrors["fName"] = "First Name Is Required.....";
    } else if (!inputValues.lName) {
      isValid = false;
      formErrors["lName"] = "Last Name Is Required.....";
    } else if (!inputValues.email) {
      isValid = false;
      formErrors["email"] = "Email Is Required.....";
      // } else if (!inputValues.email.match(emailCond)) {
      //   isValid = false;
      //   formErrors["email"] = "Vaild Email Is Required";
    } else if (!password) {
      isValid = false;
      formErrors["password"] = "Password Is Required.....";
    } else if (password.length < 6) {
      isValid = false;
      formErrors["password"] = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      isValid = false;
      formErrors["password"] = "Password must shorter than 20 characters";
      // } else if (!password.match(cond1)) {
      //   isValid = false;
      //   formErrors["password"] = "Password must contain at least one lowercase";
      // } else if (!password.match(cond2)) {
      //   isValid = false;
      //   formErrors["password"] =
      //     "Password must contain at least one capital letter";
      // } else if (!password.match(cond3)) {
      //   isValid = false;
      //   formErrors["password"] = "Password must contain at least a number";
    } else if (!inputValues.confirmPassword) {
      isValid = false;
      formErrors["confirmPassword"] = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      isValid = false;
      formErrors["confirmPassword"] =
        "Password does not match confirmation password";
    }
    setError(formErrors);
    return isValid;
  };

  // useEffect(() => {
  //   checkValidation();
  // }, [inputValues]);

  // useEffect(() => {
  //   const auth = localStorage.getItem("registration");
  //   if (auth) {
  //     navigate("/home");
  //   }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      const res = await axios.post(
        "http://localhost:3000/registers",
        inputValues
      );
      setValidation(res.validation);
      localStorage.setItem("registration", JSON.stringify(res.data));
      toast.success("Add Successfully");
      navigate("/home");
    }
  };

  return (
    <>
      <div className="main-w3layouts wrapper">
        <h1>SignUp Form</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form onSubmit={handleSubmit}>
              <input
                className="text"
                placeholder="First Name"
                type="text"
                name="fName"
                onChange={(e) => handleChange(e)}
                value={inputValues.fName}
              />
              <p style={{ color: "red" }}>{error.fName}</p>
              <br />
              <input
                className="text"
                placeholder="Last Name"
                type="text"
                name="lName"
                onChange={(e) => handleChange(e)}
                value={inputValues.lName}
              />
              <p style={{ color: "red" }}>{error.lName}</p>
              <br />
              <input
                className="text"
                placeholder="E-Mail"
                type="email"
                name="email"
                value={inputValues.email}
                onChange={(e) => handleChange(e)}
              />
              <p style={{ color: "red" }}>{error.email}</p>
              <br />
              <input
                className="text"
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                value={inputValues.password}
              />
              <p style={{ color: "red" }}>{error.password}</p>
              <br />
              <input
                className="text"
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                onChange={(e) => handleChange(e)}
                value={inputValues.confirmPassword}
              />
              <p style={{ color: "red" }}>{error.confirmPassword}</p>

              <br />
              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required />
                  <span> I Agree To The Terms & Conditions</span>
                </label>
                <div className="clear"> </div>
              </div>
              <input type="submit" value="SIGNUP" />
            </form>
            <p>
              Don't have an Account?
              <Link to={"/"}> Login Now!</Link>
            </p>
          </div>
        </div>
        <ul className="colorlib-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Register;
