import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../constants/navigation";

export default function Navbar() {
  let [toggle, setToggle] = useState(false);
  let [active, setActive] = useState(false);
  


  return (
    <nav className="w-full px-7 py-5 sticky top-0 z-10 text-lg font-sans text-white bg-[#000714] bg-opacity-70 hover:bg-opacity-100">
      <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
        
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img className="h-12 w-12 object-contain" src="./logo.png"></img>
          <p>Digital Orbit</p>
        </Link>
        <ul className="sm:flex hidden gap-12 list-none">
          {navLinks.map((x) => (
            <li
              key={x.id}
              className={`${
                active === x.title ? "text-white" : "text-slate-300"
              } hover:text-white `}
              onClick={() => setActive(x.title)}
            >
              <a href={`#${x.id}`}>{x.title}</a>
            </li>
          ))}
        </ul>
        <h1 className="sm:hidden block" onClick={() => setToggle(!toggle)}>
          {" "}
          {toggle ? "\u2715" : "\u2261"}
        </h1>
        <ul
          className={`${
            toggle ? "flex" : "hidden"
          } sm:hidden flex-col z-10 absolute gap-6 bg-black top-20 right-0 min-w-[140px] mx-4 my-4 py-5 px-2 rounded-xl border`}
        >
          {navLinks.map((x) => (
            <li
              key={x.id}
              className={`${
                active === x.title ? "text-white" : "text-slate-300"
              } hover:text-white `}
              onClick={() => {
                setToggle(!toggle);
                setActive(x.title);
              }}
            >
              <a href={`#${x.id}`}>{x.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
