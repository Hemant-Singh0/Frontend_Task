import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, editData } from "../Component/Action/Index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AllData = () => {
  const [inputData, setInputdata] = useState("");
  const [editId, setEditId] = useState();
  const list = useSelector((state) => state.formReducers.list);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <h1>ALL DATA</h1>
      </div>

      <div>
        <table className="table table-success">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {list.map((e, index) => {
            return (
              <tbody key={e.id}>
                <tr className="table-success">
                  <th scope="row">{index + 1}</th>
                  <td>{e.data}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteData(e.id))}
                    >
                      Delete
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                      className="btn btn-primary"
                      variant="primary"
                      onClick={() => {
                        setInputdata(e.data);
                        setEditId(e.id);
                        handleShow();
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="Message"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputdata(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => dispatch(editData(editId, inputData))}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AllData;
