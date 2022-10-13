import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   updatedata,
//   getUserId,
// } from "../../Component/Services/DataServices/dataServices";
import Header from "../../Component/Header/Header";

const UpdateUser = ({ user, handleChange, onSubmit, error }) => {
  // const { id } = useParams();
  // let navigate = useNavigate();
  // const [user, setUser] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   number: "",
  // });
  // const [validation, setValidation] = useState({});
  // const [error, setError] = useState({});

  // const checkValidation = () => {
  //   let formErrors = {};
  //   let isValid = true;
  //   if (!user.firstname) {
  //     isValid = false;
  //     formErrors["name"] = "First Name is required.....";
  //   } else if (!user.lastname) {
  //     isValid = false;
  //     formErrors["lastname"] = "Last Name is required.....";
  //   } else if (!user.email) {
  //     isValid = false;
  //     formErrors["email"] = "Email is required.....";
  //   } else if (!user.number) {
  //     isValid = false;
  //     formErrors["number"] = "Number is required.....";
  //   }
  //   setError(formErrors);
  //   return isValid;
  // };

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await getUserId(id);
  //   setUser(result.data);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (checkValidation()) {
  //     const res = await updatedata(user);
  //     setValidation(res.validation);
  //     navigate("/");
  //   }
  // };

  return (
    <>
      <Header />
      <br />
      <div className="container">
        <div className="w-750 mx-auto shadow p-50">
          <h2 className="text-center mb-4">Edit User</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <span style={{ color: "red" }}>{error.firstname}</span>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Last Name"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{error.lastname}</span>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{error.email}</span>
            </div>
            <div className="form-group">
              <input
                type="string"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="number"
                value={user.number}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{error.number}</span>
            </div>

            <button className="btn btn-primary btn-block">Update User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
