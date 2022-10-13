import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Api from "./Airlines/Api";

const App8 = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App8;
