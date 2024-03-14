import { Link } from "react-router-dom";
import menu from '../../assets/menu.svg'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const navItem=<>
    <li><Link>Home</Link></li>
    <li><Link>Pages</Link></li>
    <li><Link>Portfolio</Link></li>
    <li><Link>shop</Link></li>
    <li><Link>Blog</Link></li>
    <li><Link>contact</Link></li>
    </>
    return (
       <div className="px-10 max-w-[1300px] mx-auto border-b">
         <div className="navbar bg-black text-white border border-y-0 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-semibold " >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="bg-[var(--primary-color)] rounded-full p-4">
          <img src={menu} alt="" className="" />
          </div>
        </div>
      </div>
       </div>
    );
};

export default Navbar;