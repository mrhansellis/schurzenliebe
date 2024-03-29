import React, { useState } from 'react'
import { navLinks } from '../constants';
import { logo, menu, close } from "./../assets";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  
  return (

    <nav className={`w-full flex py-6 justify-center items-center navbar`}>
      
      <a href="#home">
      <img src={logo} alt="hedgehog logo" className="w-[124px] h-[114px]"  />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div
      className={`${toggle ? 'flex' : 'hidden'} p-6 bg-blue-menu-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-md sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}`}
          >
            <a href={`#${nav.id}`}
            onClick={() => setToggle((prev) => !prev)}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      </div>
    </nav>
  )
}

export default Navbar