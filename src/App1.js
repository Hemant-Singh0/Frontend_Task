import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Form from "./ReduxForm/Pages/Form";
import AllData from "./ReduxForm/Pages/AllData";
import ReduxNavbar from "./ReduxForm/Component/ReduxNavbar/ReduxNavbar";

const App1 = () => {
  return (
    <>
      <BrowserRouter>
        <center>
          <ReduxNavbar />
          <br />
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route path="/data" element={<AllData />} />
          </Routes>
        </center>
      </BrowserRouter>
    </>
  );
};

export default App1;
