import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the about page.</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default AboutPage;
