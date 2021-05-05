import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";
import { Link } from "react-router-dom";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/featured`
        );
        setFeaturedBlog(response.data[0]);
        console.log(featuredBlog);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/`
        );
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return "";
  };
  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              Category : {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-muted mt-2">
              {blogPost.month} {blogPost.day}
            </div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="250"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });
    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="container mt-3">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link
            className="p-2 link-secondary category-items"
            to="/category/world"
          >
            World
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/environment"
          >
            Environment
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/technology"
          >
            Technology
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/design"
          >
            Design
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/culture"
          >
            Culture
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/bussiness"
          >
            Business
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/politics"
          >
            Politics
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/opinion"
          >
            Opinion
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/science"
          >
            Science
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/health"
          >
            Health
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/style"
          >
            Style
          </Link>
          <Link
            className="p-2 link-secondary category-items"
            to="/category/travel"
          >
            Travel
          </Link>
        </nav>
      </div>
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          Featured Post
          <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
          <h1 className="display-4 fst-italic">
            <h4>Category : {capitalizeFirstLetter(featuredBlog.category)}</h4>
          </h1>
          <p className="lead my-3">{featuredBlog.excerpt}</p>
          <p className="lead mb-0 featured-blog-link">
            <Link
              exact
              to={`/blog/${featuredBlog.slug}`}
              className="text-white fw-bold"
            >
              Continue reading...
            </Link>
          </p>
        </div>
      </div>
      {getBlogs()}
    </div>
  );
};
export default Blog;
