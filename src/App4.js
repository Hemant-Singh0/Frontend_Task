import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./ReduxRegister/Pages/Header/Header";
import Dashboard from "./ReduxRegister/Pages/Dashboard/Dashboard";
import Register from "./ReduxRegister/Pages/Register/Register";
import Cart from "./ReduxRegister/Pages/Cart/Cart";
import Private from "./ReduxRegister/Component/Private/Private";
import Public from "./ReduxRegister/Component/Public/Public";

const App3 = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard />
              // <Public>
              // </Public>
            }
          />

          <Route
            path="/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
          <Route
            path="/cart"
            element={
              <Private>
                <Cart />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App3;
