import React, { useEffect, useState } from "react";
import HomeIndex from "./HomeIndex";
import AddIndex from "../../Page/AddNew/AddIndex";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link, useParams } from "react-router-dom";

const HomeFunction = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [typeCheck, setTypeCheck] = useState("add");
  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setUsers(result.data.reverse());
  };

  const handleEdit = (users) => {
    setUsers({ user: users.id });
    handleShow();
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    toast.error("Data Deleted Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    loadUsers();
  };

  const handleShow = (type, data) => {
    setTypeCheck(type);
    if (type == "edit") {
      setId(data.id);
      setShow(true);
      setUser({
        ...user,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
    } else {
      setId("");
      setShow(true);
      setUser({
        ...user,
        name: "",
        email: "",
        phone: "",
      });
    }
  };

  const checkValidation = () => {
    let formErrors = {};
    let isValid = true;
    if (!user.name) {
      isValid = false;
      formErrors["name"] = "Name Is Required.....";
    } else if (!user.phone) {
      isValid = false;
      formErrors["phone"] = "Number Is Required.....";
    } else if (!user.email) {
      isValid = false;
      formErrors["email"] = "Email Is Required.....";
    }
    setError(formErrors);
    return isValid;
  };

  const handleCloseIcon = () => setShow(false);

  const editData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    navigate("/");
  };

  const adddData = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      const res = await axios.post("http://localhost:3000/users", user);
      setValidation(res.validation);
      toast.success("Add Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  };

  const getUsers = async (id) => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <HomeIndex
        users={users}
        setUsers={setUsers}
        deleteUser={deleteUser}
        handleEdit={handleEdit}
        loadUsers={loadUsers}
        handleShow={handleShow}
      />
      <AddIndex
        users={users}
        handleShow={handleShow}
        show={show}
        user={user}
        setUser={setUser}
        handleCloseIcon={handleCloseIcon}
        handleEdit={handleEdit}
        editData={editData}
        adddData={adddData}
        error={error}
        getUsers={getUsers}
        edit={typeCheck}
      />
    </>
  );
};

export default HomeFunction;
