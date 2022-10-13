import { useState, useEffect } from "react";
import "./Register.css";
import { register } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Api/api";
import { ToastProvider, useToasts } from "react-toast-notifications";

function Registerr() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { addToast } = useToasts();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const res = await addUser(formValues);
    if (res.status == 200) {
      navigate("/");
      dispatch(register(formValues));
      addToast("Saved Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast(res.message, { appearance: "error", autoDismiss: true });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //   console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <center>
        <form onSubmit={handleSubmit}>
          <center>
            <h1 style={{ color: "black" }}>Register Form</h1>
          </center>
          <br />
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label style={{ color: "black" }}>Username</label>
              <br />
              <input
                className="username"
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label style={{ color: "black" }}>Email</label>
              <br />
              <input
                type="text"
                className="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label style={{ color: "black" }}>Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <br />
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </center>
    </div>
  );
}

export default Registerr;
