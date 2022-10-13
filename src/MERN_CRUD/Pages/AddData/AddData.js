import React from "react";
import Header from "../../Component/Header/Header";

const AddUser = ({ user, handleChange, onSubmit, error }) => {
  return (
    <>
      <Header />
      <br />
      <div className="container">
        <div className="w-750 mx-auto shadow p-50">
          <h2 className="text-center mb-4">Add User</h2>
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
            </div>
            <span style={{ color: "red" }}>{error.lastname}</span>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <span style={{ color: "red" }}>{error.email}</span>
            <div className="form-group">
              <input
                type="string"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="number"
                value={user.number}
                onChange={handleChange}
              />
            </div>
            <span style={{ color: "red" }}>{error.number}</span>
            <br />
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
