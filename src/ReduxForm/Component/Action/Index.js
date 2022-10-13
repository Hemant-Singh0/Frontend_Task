export const addData = (data) => {
  return {
    type: "ADDDATA",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteData = (id) => {
  return {
    type: "DELETEDATA",
    id,
  };
};

export const editData = (id, data) => {
  return {
    type: "EDITDATA",
    payload: {
      id: id,
      data: data,
    },
  };
};
