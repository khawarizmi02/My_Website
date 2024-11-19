import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { logo1, menu, close } from "../assets";
import { navLinks } from "../constant";

const Navbar = () => {
  const [pageLocation, setPageLocation] = useState("");
  const [toggle, setToggle] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    setPageLocation(segments[0] || ""); // If segments[0] is undefined, it will default to "".
  }, [location.pathname]);

  function setActive(title: string): void {
    const navItem = navLinks.find((nav) => nav.title === title);
    if (navItem) {
      setPageLocation(navItem.id);
      setToggle(false); // Close the menu after selecting an item
    }
  }

  return (
    <nav
      ref={navbarRef}
      className="bg-cream w-full flex py-4 justify-between items-center rounded-[5px]"
    >
      <Link to={`/`}>
        <img src={logo1} alt="logo1" className="w-[220px] h-[95px] ml-7" />
      </Link>

      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
              pageLocation === nav.id ? "border-b-[2px] border-b-mainBlue" : ""
            } ${index === navLinks.length ? "mr-0" : "mr-7"}`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-mainBlue absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[11]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] text-cream
                   ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
