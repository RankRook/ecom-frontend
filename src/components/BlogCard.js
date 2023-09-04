import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2020</p>
        <h5 className="title">Hello Sir</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit,
          maxime natus omnis cupiditate ea et, praesentium dolore officiis alias
          culpa, enim optio blanditiis? Aperiam nam deleniti nesciunt doloribus
          doloremque.
        </p>
        <Link to="/" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
