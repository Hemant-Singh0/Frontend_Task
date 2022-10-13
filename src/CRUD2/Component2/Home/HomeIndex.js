import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./Home.css";

const HomeIndex = ({
  users,
  setUsers,
  deleteUser,
  handleShow,
  handleEdit,
  loadUsers,
}) => {
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <div className="container">
        <div className="py">
          <h1>Home Page</h1>
          <span className="icon" onClick={() => handleShow("add")}>
            <AiOutlineUserAdd size={40} />
          </span>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/users/${user.id}`}>
                      <IoEyeSharp size={25} />
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <Link to={`/users/edit/${user.id}`}>
                      <FiEdit2 size={25} />
                    </Link> */}
                    <FiEdit2
                      size={25}
                      onClick={() => handleShow("edit", user)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <AiOutlineDelete
                      size={25}
                      onClick={() => deleteUser(user.id)}
                      style={{
                        color: "red",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
