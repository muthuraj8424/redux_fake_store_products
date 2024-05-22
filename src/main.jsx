import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import { store } from "./Reducer/Store.jsx";
import { store } from "./Components/Features/Store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
