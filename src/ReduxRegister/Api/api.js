import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const addUser = async (formValues, error) => {
  try {
    const res = await axios.post(`${BASE_URL}/signup`, formValues);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export { addUser };
