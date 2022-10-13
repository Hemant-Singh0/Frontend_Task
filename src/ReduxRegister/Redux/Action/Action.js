import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants/Constants";

export const register = (data) => {
  let localdata = JSON.parse(localStorage.getItem("register")) || [];
  let dataArr = [...localdata];

  dataArr.push(data);
  localStorage.setItem("register", JSON.stringify(dataArr));
};

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const removeToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id,
  };
};
