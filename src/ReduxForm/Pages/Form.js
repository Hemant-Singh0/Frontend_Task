import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { addData } from "../Component/Action/Index";

const Form = () => {
  const [inputData, setInputdata] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="contact-clean">
        <form>
          <h2 className="text-center">Redux Form</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Message"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputdata(e.target.value)}
            ></input>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addData(inputData), setInputdata(""))}
            >
              send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
