import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";

const Index = ({
  editData,
  user,
  setUser,
  handleCloseIcon,
  show,
  adddData,
  error,
  getUsers,
  edit,
}) => {
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleCloseIcon}>
        <Modal.Header closeButton>
          {/* <span style={{ fontSize: 40 }}> */}
          {/* {edit == true ? "Edit" : "Add"} */}
          {/* </span> */}
        </Modal.Header>
        <center style={{ marginTop: "0.5rem" }}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Form
                onSubmit={(e) => {
                  if (edit == "edit") {
                    editData(e);
                  } else {
                    adddData(e);
                  }
                }}
              >
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={user.name}
                    onChange={(e) => onInputChange(e)}
                  />
                  <span style={{ color: "red" }}>{error.name}</span>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Enter Phone No"
                    name="phone"
                    value={user.phone}
                    onChange={(e) => onInputChange(e)}
                  />
                  <span style={{ color: "red" }}>{error.phone}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={user.email}
                    onChange={(e) => onInputChange(e)}
                  />
                  <span style={{ color: "red" }}>{error.email}</span>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Check me out"
                    required="required"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </center>
      </Modal>
    </>
  );
};

export default Index;
