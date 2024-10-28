import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Blog from "./Components/Blog";
import BlogPage from "./Pages/BlogPage";
let routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact-us",
    element: <Contact />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path:'blog/:id',
    element:<BlogPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
