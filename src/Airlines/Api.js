import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import ReactPaginate from "react-paginate";

const Api = () => {
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const limit = 5;

  useEffect(() => {
    getUsers();
  }, [limit]);

  const getUsers = async () => {
    const users = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=1&size=${limit}`
    );
    const user = await users.json();
    // console.log("resssss", user);
    // console.log("ressss", user.totalPages);
    // console.log("resss", Math.ceil(user.totalPassengers / limit));
    setPageCount(Math.ceil(user.totalPassengers / limit));
    setData(user.data);
  };

  const fetchPassenger = async (currentPage) => {
    const res = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${limit}`
    );
    const data = await res.json();
    const result = data.data;
    return result;
  };

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    const passengerFormServer = await fetchPassenger(currentPage);
    setData(passengerFormServer);
  };

  const search = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Home
        data={data}
        search={search}
        text={text}
        ReactPaginate={ReactPaginate}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default Api;
