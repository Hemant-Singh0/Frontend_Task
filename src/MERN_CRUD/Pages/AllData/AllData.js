import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Header from "../../Component/Header/Header";

const AllData = ({
  users,
  deleteUser,
  handlePrevious,
  handleNext,
  page,
  size,
  canPrevPage,
  canNextPage,
}) => {
  return (
    <>
      <Header />
      <br />
      <center>
        <h1>AllData</h1>
      </center>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table bg-white rounded border table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Phone</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.number}</td>
                    <td>{user.email}</td>
                    <td>
                      &nbsp;
                      <Link to={`/edit/${user._id}`}>
                        <FiEdit2 size={15} style={{ color: "white" }} />
                      </Link>
                      &nbsp; &nbsp;
                      <AiOutlineDelete
                        size={18}
                        onClick={() => deleteUser(user._id)}
                        style={{
                          color: "red",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              Page : {page}
              <br />
              Page Size : {size}
              <br />
              <ul className="pagination">
                <button
                  // disabled={page === 1}
                  disabled={!canPrevPage()}
                  className="bg-primary text-white"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="bg-primary text-white"
                  disabled={!canNextPage()}
                  // disabled={page === size}
                  onClick={handleNext}
                >
                  Next
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllData;
