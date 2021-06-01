import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { Provider } from "react-redux";

render(
  // <Provider store={this.props.store}>
    <Router>
      <App />
    </Router>,
  {/* </Provider>, */}
  document.getElementById("app")
);
