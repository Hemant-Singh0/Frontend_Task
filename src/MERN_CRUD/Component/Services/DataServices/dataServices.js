import axios from "axios";
import { BASE_URL } from "../../Constants/constants";

const adddata = async (user, error) => {
  try {
    const res = await axios.post(`${BASE_URL}/data/adddata`, user);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

const getdata = async (page, size) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/data/get?page=${page}&size =${size}`
    );
    return res.data;
  } catch (error) {
    return error.response;
  }
};

const updatedata = async (user, id, error) => {
  try {
    const res = await axios.put(`${BASE_URL}/data/update/${id}`, user);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

const getUserId = async (id, error) => {
  try {
    const res = await axios.get(`${BASE_URL}/data/getUserId/${id}`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

const deletedata = async (id, error) => {
  try {
    const res = await axios.delete(`${BASE_URL}/data/delete/${id}`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export { getdata, adddata, updatedata, getUserId, deletedata };
