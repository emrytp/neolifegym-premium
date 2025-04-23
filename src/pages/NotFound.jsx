import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="section-404">
      <div className="container">
        <div className="text-404">
          <h1>404</h1>
          <h3>Oops! Page not found</h3>
          <p>The page you are looking for might have been moved, renamed or might never existed.</p>
          <div className="search-404">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <Link to="/">
            <i className="fa fa-angle-double-left"></i> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
