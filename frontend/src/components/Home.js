import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <div className="container mt-5">
    <div>
      <div className="bg-light p-5 rounded">
        <div className="col-sm-8 mx-auto">
          <h1 className="mb-5">Welcome To Blog Lyfe</h1>
          <p>
            We make all kinds blog posts about various topics like Entertainment
            , Science , Design etc.
          </p>
          <p>Click the button below to check out our awesome blog page.</p>
          <p>
            <Link className="btn btn-primary" to="/blog" role="button">
              View Blog Page &raquo;
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
