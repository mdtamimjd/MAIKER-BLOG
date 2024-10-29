import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
    const [open,setOpen] = useState(true)
    const headlerMenuBtn = () => {
        const mobileMenuBar = document.getElementById("mobileMenuBar");
        if(open){
            mobileMenuBar.classList.remove("left-[1000px]")
            mobileMenuBar.classList.add("left-[0]")
        }else{
            mobileMenuBar.classList.add("left-[1000px]")
            mobileMenuBar.classList.remove("left-[0]")
        }
        setOpen(!open)
    }
  return (
    <div className="overflow-hidden">
      <div className="bg-zinc-200">
        <nav className="w-11/12 lg:w-9/12 mx-auto py-5 flex justify-between items-center relative">
          <Link to="/" className="font-semibold text-xl">
            MAIKER-BLOG
          </Link>
          <ul className="gap-5 hidden lg:flex">
            <NavLink
              className="hover:text-blue-500 font-light text-[17px] border-b-2 px-6 py-2.5 hover:border-green-500 transition-all duration-300"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="hover:text-blue-500 font-light text-[17px] border-b-2 px-6 py-2.5 hover:border-green-500 transition-all duration-300"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="hover:text-blue-500 font-light text-[17px] border-b-2 px-6 py-2.5 hover:border-green-500 transition-all duration-300"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="hover:text-blue-500 font-light text-[17px] border-b-2 px-6 py-2.5 hover:border-green-500 transition-all duration-300"
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
          <div className="font-bold text-3xl select-none lg:hidden">
            {
                open
                ?
                <CiMenuFries onClick={headlerMenuBtn} className="cursor-pointer"/>
                :
                <AiOutlineClose onClick={headlerMenuBtn} className="hover:text-green-500 cursor-pointer"/>
            }
          </div>
        </nav>
      </div>
      <ul id="mobileMenuBar" className="overflow-hidden lg:hidden flex w-11/12 lg:w-9/12 mx-auto flex-col absolute transform  transition-all duration-1000 p-5 rounded-b-lg bg-green-100 right-0 left-[1000px] ease-out">
        <NavLink
          className="hover:text-blue-500 font-light text-[17px] border-b-2 py-2.5 hover:border-green-500 transition-all duration-300"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="hover:text-blue-500 font-light text-[17px] border-b-2 py-2.5 hover:border-green-500 transition-all duration-300"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className="hover:text-blue-500 font-light text-[17px] border-b-2 py-2.5 hover:border-green-500 transition-all duration-300"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-500 font-light text-[17px] border-b-2 py-2.5 hover:border-green-500 transition-all duration-300"
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
