import React from "react";
import { dataBlog } from "../Data/blogs";
import { useLocation } from "react-router-dom";

export default function BlogPage() {
    let location=useLocation();
    let blogIndex=location.pathname.split('/').pop()   
  return <div>
    <h3>BlogPage</h3>

    <section>
        {dataBlog[blogIndex].body}
    </section>
  </div>;
}
