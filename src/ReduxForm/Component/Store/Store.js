import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "../Reducer/Index";
import storage from "redux-persist/lib/storage";
const persitConfig = {
  key: "database",
  storage,
};

const persistedReducer = persistReducer(persitConfig, rootReducer);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;
