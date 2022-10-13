import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App1 from "./App1";
import App4 from "./App4";
import App6 from "./App6";
import App5 from "./App5";
import App7 from "./App7";
import App8 from "./App8";
import reportWebVitals from "./reportWebVitals";
// import store from "./Redux/app/store";
//import store, { persistor } from "./ReduxForm/Component/Store/Store";
import store, { persistor } from "./ReduxRegister/Redux/Store/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from "react-toast-notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastProvider>
          <App8 />
        </ToastProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
