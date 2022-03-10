import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import stars from "./Components/images/stars.svg";

ReactDOM.render(
  <App style={{ backgroundImage: { stars } }} />,
  document.getElementById("root")
);

reportWebVitals();
