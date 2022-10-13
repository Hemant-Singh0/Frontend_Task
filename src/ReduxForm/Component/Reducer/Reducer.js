const initialData = {
  list: [],
};

const formReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADDDATA":
      const { id, data } = action.payload;
      if (data) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }

    case "DELETEDATA":
      const newList = state.list.filter((e) => e.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "EDITDATA":
      const setdata = state.list?.map((w) => {
        if (w.id == action.payload.id) {
          w.data = action.payload.data;
          return w;
        } else {
          return w;
        }
      });

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default formReducers;
