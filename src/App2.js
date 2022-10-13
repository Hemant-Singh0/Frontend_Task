import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./CRUD2/Component2/Layout/Index";
import Add from "./CRUD2/Page/AddNew/AddFunction";
import Home from "./CRUD2/Component2/Home/HomeFunction";
import Edit from "./CRUD2/Page/EditUser/EditFunction";
import View from "./CRUD2/Page/ViewUser/Index";
import { ToastContainer } from "react-toastify";
import Register from "./CRUD2/Page/Register/Register";
import Login from "./CRUD2/Page/Login/Login";
import PrivatePage from "./CRUD2/PrivatePage/PrivatePage";
import "react-toastify/dist/ReactToastify.css";
import PublicPage from "./CRUD2/PublicPage/PublicPage";

const App = () => {
  return (
    <>
      <center>
        <BrowserRouter>
          <center>
            {/* <PrivatePage> */}
            <Layout />
            {/* </PrivatePage> */}

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
            <ToastContainer />
            <Routes>
              <Route>
                <Route
                  exact
                  path="/"
                  element={
                    <PublicPage>
                      <Login />
                    </PublicPage>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PublicPage>
                      <Register />
                    </PublicPage>
                  }
                />
              </Route>

              <Route
                path="/home"
                element={
                  <PrivatePage>
                    <Home />
                  </PrivatePage>
                }
              />
              <Route
                path="/users/adduser"
                element={
                  <PrivatePage>
                    <Add />
                  </PrivatePage>
                }
              />
              <Route
                path="/users/edit/:id"
                element={
                  <PrivatePage>
                    <Edit />
                  </PrivatePage>
                }
              />
              <Route
                path="/users/:id"
                element={
                  <PrivatePage>
                    <View />
                  </PrivatePage>
                }
              />
            </Routes>
          </center>
        </BrowserRouter>
      </center>
    </>
  );
};

export default App;
