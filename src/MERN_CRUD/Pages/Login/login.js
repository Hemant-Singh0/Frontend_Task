import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ formValues, handleChange, handleSubmit, error }) => {
  // const initialValues = {
  //   email: "",
  //   password: "",
  // };
  // const [formValues, setFormValues] = useState(initialValues);
  // const { addToast } = useToasts();
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (Object.keys(isValid(formValues)).length !== 0) {
  //     return setFormErrors(isValid(formValues));
  //   }
  // }, [formValues]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const isValid = (values) => {
  //   const errors = {};
  //   const regex =
  //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   const phoneRegex = /^\d{10}$/;
  //   const num = /^[0-9]+$/;
  //   switch (true) {
  //     case values.email == "":
  //       errors.email = "Please Fill email!";
  //       break;
  //     case values.email == "" && regex.test(values.email):
  //       errors.email = "Please Fill valid Email!";
  //       break;
  //     case values.password == "":
  //       errors.password = "Please Fill Password";
  //       break;
  //   }
  //   return errors;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (Object.keys(isValid(formValues)).length !== 0) {
  //     return setFormErrors(isValid(formValues));
  //   }
  //   setIsSubmit(true);
  //   const res = await login(formValues);
  //   if (res.status == 200) {
  //     localStorage.setItem("Token", JSON.stringify(res.data));
  //     navigate("/");
  //     addToast(res.message, {
  //       appearance: "success",
  //       autoDismiss: true,
  //     });
  //   } else {
  //     addToast(res.data.message, { appearance: "error", autoDismiss: true });
  //   }
  // };
  return (
    <>
      <div className="page">
        <div className="row">
          <div className="col-sm-8 text-center signin">
            <form>
              <p className="h4 mb-4 text-center signintext top">
                <strong>Sign in to this Website</strong>
              </p>
              <p className="text-center signintext">
                Or use your Email account
              </p>
              <input
                type="email"
                className="form-control mb-4"
                placeholder="Email"
                style={{ fontFamily: "Arial" }}
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{error.email}</p>
              <input
                type="password"
                className="form-control mb-4"
                placeholder="Password"
                style={{ fontFamily: "Arial" }}
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p>{error.password}</p>
              <button
                className="btn btn-info btn-block LoginBtn"
                type="submit"
                onClick={handleSubmit}
              >
                SIGN IN
              </button>
            </form>
          </div>

          <div className="col-sm-4 signup text-center">
            <h2 className="HelloFriend">Hello, Friend!</h2>
            <h4 className="SignupText">
              Enter your personal details
              <br />
              and start journey with us
            </h4>
            <br />
            <Link
              to={"/register"}
              className="btn btn-info btn-block signupbtn"
              type="submit"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
