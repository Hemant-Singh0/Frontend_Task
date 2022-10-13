import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
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
      <div className="container py-4">
        <h1 className="display-4">User ID : {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">Name : {user.name}</li>
          <br />
          <li className="list-group-item">User Name : {user.username}</li>
          <br />
          <li className="list-group-item">E-Mail : {user.email}</li>
          <br />
          <li className="list-group-item">Phone No : {user.phone}</li>
          <br />
          <li className="list-group-item">Web-Site : {user.website}</li>
        </ul>
        <br />
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default View;
