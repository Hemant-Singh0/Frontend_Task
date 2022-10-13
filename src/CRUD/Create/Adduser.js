import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  const checkValidation = () => {
    let formErrors = {};
    let isValid = true;
    if (!user.name) {
      isValid = false;
      formErrors["name"] = "Name is required.....";
    } else if (!user.username) {
      isValid = false;
      formErrors["username"] = "User Name is required.....";
    } else if (!user.email) {
      isValid = false;
      formErrors["email"] = "Email is required.....";
    } else if (!user.phone) {
      isValid = false;
      formErrors["phone"] = "Number is required.....";
    } else if (!user.website) {
      isValid = false;
      formErrors["website"] = "Web-Site is required.....";
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
      const res = await axios.post("http://localhost:3000/users", user);
      setValidation(res.validation);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form
          // onSubmit={(e) => onSubmit(e)}
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={(e) => onInputChange(e)}
              // required
            />
          </div>
          <span style={{ color: "red" }}>{error.name}</span>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
              onChange={(e) => onInputChange(e)}
              // required
            />
          </div>
          <span style={{ color: "red" }}>{error.username}</span>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={(e) => onInputChange(e)}
              // required
            />
          </div>
          <span style={{ color: "red" }}>{error.email}</span>
          <div className="form-group">
            <input
              type="string"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={(e) => onInputChange(e)}
              // required
            />
          </div>
          <span style={{ color: "red" }}>{error.phone}</span>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={user.website}
              onChange={(e) => onInputChange(e)}
              // required
            />
          </div>
          <span style={{ color: "red" }}>{error.website}</span>
          <button className="btn btn-primary btn-block">Add User</button>
          <br />
          <br />
          <Link className="btn btn-primary btn-block" to="/">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
