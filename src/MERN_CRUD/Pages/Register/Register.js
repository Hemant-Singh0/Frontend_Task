import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = ({ formValues, handleChange, handleSubmit, error }) => {
  return (
    <>
      <div className="container card-0 justify-content-center ">
        <div className="card-body px-sm-4 px-0">
          <div className="row justify-content-center mb-4">
            <div className="col-md-10 col">
              <h1 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">
                Register Form
              </h1>
            </div>
          </div>
          <div className="row justify-content-center round">
            <div className="col-lg-10 col-md-12">
              <div className="card shadow-lg card-1">
                <div className="card-body inner-card">
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label for="first-name">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="first-name"
                          placeholder="Type Your First Name..."
                          name="firstname"
                          value={formValues.firstname}
                          onChange={handleChange}
                        />
                        <p>{error.firstname}</p>
                      </div>
                      <div className="form-group">
                        <label for="Mobile-Number">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Mobile-Number"
                          placeholder="Type Your Mobile Number..."
                          name="number"
                          value={formValues.number}
                          onChange={handleChange}
                        />
                        <p>{error.number}</p>
                      </div>
                      <div className="form-group">
                        <label for="skill">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="skill"
                          placeholder="Type Your Password..."
                          name="password"
                          value={formValues.password}
                          onChange={handleChange}
                        />
                        <p>{error.password}</p>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label for="last-name">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="last-name"
                          placeholder="Type Your Last Name..."
                          name="lastname"
                          value={formValues.lastname}
                          onChange={handleChange}
                        />
                        <p>{error.lastname}</p>
                      </div>
                      <div className="form-group">
                        <label for="phone">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Type Your Email..."
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                        <p>{error.email}</p>
                      </div>
                      <div className="form-group">
                        <label for="Evaluate Budget">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          placeholder="Type Your Confirm Password..."
                          name="confirmPassword"
                          value={formValues.confirmPassword}
                          onChange={handleChange}
                        />
                        <p>{error.confirmPassword}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 col-12">
                      <div className="mb-2 mt-4">
                        <div className="text-right">
                          <button
                            type="button"
                            className="btn btn-primary btn-block"
                          >
                            <small
                              className="font-weight-bold"
                              onClick={handleSubmit}
                            >
                              Register
                            </small>
                          </button>
                          <p>
                            Already have an account? {""}
                            <Link to={"/login"}>SIGN IN</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
