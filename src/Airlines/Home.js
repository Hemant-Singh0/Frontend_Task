import React from "react";

const Home = ({
  data,
  search,
  text,
  ReactPaginate,
  pageCount,
  handlePageClick,
}) => {
  return (
    <>
      <input
        value={text}
        onChange={search}
        type="text"
        placeholder="Search Here ..."
        aria-label="Search"
      />
      <div className="col">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Trips</th>
              <th scope="col">Logo</th>
              <th scope="col">Airline Name</th>
              <th scope="col">Airline Slogan</th>
              <th scope="col">Airline Head Quatres</th>
              <th scope="col">Country</th>
              <th scope="col">Website</th>
              <th scope="col">Since</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(data)
              .filter((val) => {
                if (text === "") {
                  return val;
                } else if (isNaN(+text)) {
                  if (val.name.toLowerCase().startsWith(text.toLowerCase())) {
                    return val;
                  }
                } else if (!isNaN(+text)) {
                  if (
                    val.airline[0].id
                      .toString()
                      .toLowerCase()
                      .startsWith(text.toString().toLowerCase())
                  ) {
                    return val;
                  }
                }
              })
              .map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.airline[0].id}</td>
                    <td>{user.name}</td>
                    <td>{user.trips}</td>
                    <td>
                      <img
                        src={user.airline[0].logo}
                        className="rounded"
                        width="120"
                      />
                    </td>
                    <td>{user.airline[0].name}</td>
                    <td>{user.airline[0].slogan}</td>
                    <td>{user.airline[0].head_quaters}</td>
                    <td>{user.airline[0].country}</td>
                    <td>{user.airline[0].website}</td>
                    <td>{user.airline[0].established}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={"null"}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Home;
