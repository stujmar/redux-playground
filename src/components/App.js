import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";

const App = () => {
  return (
      <div className="padding">

        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />

    </div>
  );
};

export default App;
