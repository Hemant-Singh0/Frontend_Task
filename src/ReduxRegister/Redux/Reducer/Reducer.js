import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants/Constants";
const initialState = {
  cardData: [],
  data: [],
};
export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let card = null;
      let datavalue = state?.data?.filter((w) => w.id === action.payload.id);

      if (datavalue.length > 0) {
        datavalue[0].quantity = datavalue[0].quantity + 1;
        datavalue[0].totel =
          Number(datavalue[0].quantity) * Number(datavalue[0].price);
        card = state?.data?.filter((w) => w.id !== datavalue[0].id);
        card.push(datavalue[0]);
      } else {
        card = [...state.data];
        action.payload.quantity = 1;
        action.payload.totel = Number(action.payload.price);
        card.push(action.payload);
      }

      return { ...state, data: card };

    case REMOVE_TO_CART:
      // let filData = state.data?.filter((w) => w.id !== action.payload);
      // state.pop();
      if (action.type === "REMOVE_TO_CART") {
        return {
          ...state,
          data: state?.data?.filter((w) => w.id !== action.payload),
        };
      }
    default:
      return state;
  }
}
