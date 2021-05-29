import React from "react";
import { render } from "react-dom";
import HomePage from "./components/home/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <HomePage />
  </Router>,
  document.getElementById("app")
);
