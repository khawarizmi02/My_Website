import { useState } from "react";

import { logo, menu, close } from '../assets'
import { navLinks } from '../constant'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="bg-black custom-shadow w-full flex py-6 justify-between items-center navbar">

      <img src={logo} alt="hoobank" className="w-[124px] h-[30px]" />
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          nav.id !== 'contact-us'  // Example condition
          ? (
            <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
            <a href={`#${nav.id}`}>{nav.title}</a>
            </li> 
        )
        : <li>
            <button type="button" className="button-white">
              <div className="text-bold text-[16px]">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </div>
            </button>
          </li>
        ))}

      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu}
          alt= "menu"
          className="w-[28px] h-[28] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
