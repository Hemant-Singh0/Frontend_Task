import React from "react";

const Index = (props) => {
  return (
    <>
      <div className="container">
        <div className="w-50 shadow p-5">
          <h2 className="text-center mb-4">Edit A {props.user.name}</h2>
          <form onSubmit={props.onSubmit}>
            <div className="form-group">
              <span style={props.Name}>Enter Your Name</span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={props.user.name}
                onChange={(e) => props.onInputChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <span style={props.Email}>Enter Your E-mail Address</span>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={props.user.email}
                onChange={(e) => props.onInputChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <span style={props.Phone}>Enter Your Phone Number</span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={props.user.phone}
                onChange={(e) => props.onInputChange(e)}
                required
              />
            </div>

            <button className="btn btn-success">Edit User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
