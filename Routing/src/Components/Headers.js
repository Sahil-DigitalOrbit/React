import React from "react";
import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <div>
      <h1>Headers</h1>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/about-us/"}>About</Link>
      </div>
      <div>
        <Link to={"/contact-us/"}>Contact</Link>
      </div>
      <div>
        <Link to={"/blog/"}>Blog</Link>
      </div>
    </div>
  );
}
