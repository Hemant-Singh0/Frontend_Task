import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import EditIndex from "./Edit";

const EditFunction = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const Name = {
    color: "gray",
    fontSize: 20,
    marginRight: 300,
  };
  const Email = {
    color: "gray",
    fontSize: 20,
    marginLeft: -220,
  };
  const Phone = {
    color: "gray",
    fontSize: 20,
    marginLeft: -220,
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    navigate("/");
  };

  return (
    <>
      <EditIndex
        user={user}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        Name={Name}
        Email={Email}
        Phone={Phone}
      />
    </>
  );
};

export default EditFunction;
