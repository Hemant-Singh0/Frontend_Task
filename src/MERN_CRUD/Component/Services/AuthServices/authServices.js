import axios from "axios";
import { BASE_URL } from "../../Constants/constants";

const register = async (formValues, error) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/signup`, formValues);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
const loginUser = async (formValues, error) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/login`, formValues);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export { register, loginUser };
