import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./src/packages/messenger/App.js";
import { persistor, store } from "./src/redux/store";

const container = document.getElementById("reactroot");
const reactroot = createRoot(container);

// const getDataFromOutsystems = (data) => {
//   console.log("------------getDataFromOutsystems in react-----------", data);
// };

// const passDataToOutsystems = (data) => {
//   return data + "Data from React app";
// };

reactroot.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
