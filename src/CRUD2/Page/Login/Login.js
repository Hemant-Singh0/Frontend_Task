import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  const checkEmail = (registers, inputValues) => {
    const user = registers.find(
      (registers) => registers.email === inputValues.email
    );
    if (user) {
      return user;
    } else {
      toast.error("Wrong Email");
    }
  };
  const login = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      const res = await axios
        .get("http://localhost:3000/registers")
        .then((res) => checkEmail(res.data, inputValues));
      if (res) toast.success("Login Successfully");
      else
        await axios
          .get("http://localhost:3000/registers", inputValues)
          .then((res) => {
            // toast.error("Wrong Email");
          });
      localStorage.setItem("registration", JSON.stringify(res));
      setValidation(res.validation);
      toast.success("Login Successfully");
      navigate("/home");
    }
  };

  const checkValidation = () => {
    let formErrors = {};
    let isValid = true;
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;

    if (!inputValues.email) {
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
    }
    setError(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={login}>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={inputValues.email}
              onChange={(e) => handleChange(e)}
            />
            <span className="Error-box">{error.email}</span>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              value={inputValues.password}
            />
            <span className="Error-box">{error.password}</span>
            <label>Password</label>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="btn btn-success" to="/register" role="button">
            Register
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
