import { Link, NavLink } from "react-router-dom";
import menu from '../../assets/menu.svg'
import logo from '../../assets/logo.svg'
import { useState } from "react";

// css
import './Footer.css'


const Navbar = () => {
  const [openNav, setOpenNev] = useState(false)



  const navItem = <>
    <li><NavLink>Home</NavLink></li>
    {/* <li><NavLink>Pages</NavLink></li> */}
    <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
    {/* <li><NavLink>shop</NavLink></li>
    <li><NavLink>Blog</NavLink></li>
    <li><NavLink>contact</NavLink></li> */}
  </>
  return (
    <>
          <div className={!openNav?" border-b border-[var(--secondary-color)]":"hidden"}>
            <div className="px-5 lg:px-10 max-w-[1440px] mx-auto">
            <div className="border-x border-[var(--secondary-color)]">
              <div className="flex justify-between items-center py-5">
                <div>
                  <img src={logo} alt="" className="w-[90px]" />
                </div>
                <div className="hidden lg:flex">
                  <ul className="flex text-white gap-[50px] text-[15px] uppercase font-bold tracking-[2px]">
                    {navItem}
                  </ul>
                </div>
                <div className="bg-[var(--primary-color)] p-5 rounded-full cursor-pointer" onClick={() => setOpenNev(true)}>
                  <img src={menu} alt="" />
                </div>
              </div>
            </div>
            </div>

          </div>
          {
        openNav &&
        // navmenu_small_screen section
         <div className="navmenu_small_screen">
            <div className="min-h-screen bg-black px-5 py-10">
            <div className="flex justify-between">
              <div>
                <img src={logo} className="w-[90px]" alt="" />
              </div>
              <div>
                <h1 className="text-white" onClick={() => setOpenNev(false)}>X</h1>
              </div>
            </div>
              <ul className="flex flex-col text-[16px] text-white py-5">
                {navItem}
              </ul>
            </div>
            </div>
      }
    </>
  );
};

export default Navbar;