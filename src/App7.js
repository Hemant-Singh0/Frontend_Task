import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Private from "./MERN_CRUD/Pages/PrivateRouter/PrivateRouter";
import Public from "./MERN_CRUD/Pages/PublicRouter/PublicRouter";
import Dashboard from "./MERN_CRUD/Pages/Dashboard/dashboard";
import Register from "./MERN_CRUD/Pages/Register/RegisterFunction";
import Login from "./MERN_CRUD/Pages/Login/loginFunction";
import AddData from "./MERN_CRUD/Pages/AddData/AddDataFunction";
import AllData from "./MERN_CRUD/Pages/AllData/AllDataFunction";
import Update from "./MERN_CRUD/Pages/UpdateData/UpdateDataFunction";

const App7 = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route
            path="/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
          <Route
            path="/login"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="/"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route
            path="/adddata"
            element={
              <Private>
                <AddData />
              </Private>
            }
          />
          <Route
            path="/alldata"
            element={
              <Private>
                <AllData />
              </Private>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Private>
                <Update />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App7;
