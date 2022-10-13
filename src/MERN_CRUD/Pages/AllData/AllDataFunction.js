import React, { useState, useEffect } from "react";
import {
  getdata,
  deletedata,
} from "../../Component/Services/DataServices/dataServices";
import AllData from "./AllData";
import { toast } from "react-toastify";

const AllDataFunction = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log(`Fetching Data for Page::::::::::: ${page}`);
    loadUsers();
  }, [page]);

  const loadUsers = async () => {
    const result = await getdata(page, size);
    setUsers(result.data.reverse());
    // setSize(result.data.length);
    const sizes = Math.ceil(result.count / result.data.length);
    setSize(sizes);
  };

  const deleteUser = async (id) => {
    await deletedata(id);
    toast("Delete Successfully", {
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

  const handlePrevious = () => {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };

  const handleNext = () => {
    setPage((p) => {
      if (p === size) return p;
      return p + 1;
    });
  };
  const canPrevPage = () => {
    return page !== 1;
  };

  const canNextPage = () => {
    const currentPage = page + 1;
    const lastPage = page == size;
    return currentPage !== lastPage;
  };
  return (
    <>
      <AllData
        users={users}
        deleteUser={deleteUser}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        page={page}
        size={size}
        canPrevPage={canPrevPage}
        canNextPage={canNextPage}
      />
    </>
  );
};

export default AllDataFunction;
