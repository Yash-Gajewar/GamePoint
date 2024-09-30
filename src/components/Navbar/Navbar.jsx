import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Nobita from "../../assets/nobita.gif";
import Logo from "../../assets/logo.jpeg";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Activites",
    link: "/#activities",
  },
  {
    id: 3,
    name: "Packages",
    link: "/packages",
  },
  {
    id: 3,
    name: "Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/contact",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (

    <div className="shadow-md bg-white dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="py-2">

        <div className="container flex justify-between items-center">

          <img src={Logo} alt="logo" className="h-12 w-28" />

          <marquee scrollamount="5" >
            <img src={Nobita} height={70} width={70} />
          </marquee>

          {/* Darkmode Switch */}
          <DarkMode />
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center items-center bg-primary/40">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="m-4 text:4xl font-bold inline-block px-4 hover:text-primary duration-200 dark:text-black"
              >

                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
