import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(res.data);
  };
  return (
    <>
      <div className="container">
        <h1 className="display">User Id: {user.id}</h1>
        <br />
        <ul className="list-group w-50">
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
        </ul>
      </div>
      <br />
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </>
  );
};

export default View;
