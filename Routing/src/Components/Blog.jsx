import React from "react";
import { dataBlog } from "../Data/blogs";
import Headers from "./Headers";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div>
    <Headers/>
    <section>

      {dataBlog.map((blog, idx) => {
        return (
          <div className="blog-tile" key={idx}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <button ><Link to={`/blog/${idx}`}>Read More</Link></button>
          </div>
        );
      })}
    </section>
    </div>
  );
}
