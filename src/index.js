import React from "react";
import ReactDOM from "react-dom";
import Navigator from "./Navigator";

const Index = () => {
  return <Navigator />;
};

let App = document.getElementById("app");

ReactDOM.render(<Index />, App);
