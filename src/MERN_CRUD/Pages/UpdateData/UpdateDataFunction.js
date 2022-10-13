import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  updatedata,
  getUserId,
} from "../../Component/Services/DataServices/dataServices";
import UpdateUser from "./Update";

const UpdateDataFunction = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
  });
  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  const isValid = () => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let formData = true;
    switch (true) {
      case !user.firstname:
        setError({ firstname: "First Name field is required!" });
        formData = false;
        break;
      case !user.lastname:
        setError({ lastname: "Last Name field is required!" });
        formData = false;
        break;
      case !user.email:
        setError({ email: "Email field is required!" });
        formData = false;
        break;
      case user.email && !regex.test(user.email):
        setError({ email: "Please enter valid email address!" });
        formData = false;
        break;
      case !user.number:
        setError({ number: "Phone field is required!" });
        formData = false;
        break;
      default:
        formData = true;
    }
    return formData;
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await getUserId(id);
    setUser(result.data);
  };

  const handleChange = (e) => {
    setError({});
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await updatedata(user);
      setValidation(res.validation);
      navigate("/");
    }
  };
  return (
    <>
      <UpdateUser
        user={user}
        handleChange={handleChange}
        onSubmit={onSubmit}
        error={error}
      />
    </>
  );
};

export default UpdateDataFunction;
