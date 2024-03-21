import { Link } from "react-router-dom";
import menu from '../../assets/menu.svg'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const navItem = <>
    <li><Link>Home</Link></li>
    <li><Link>Pages</Link></li>
    <li><Link>Portfolio</Link></li>
    <li><Link>shop</Link></li>
    <li><Link>Blog</Link></li>
    <li><Link>contact</Link></li>
  </>
  return (
    <div className="px-5 lg:px-10 max-w-[1440px] mx-auto border-b border-[var(--secondary-color)]">
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
        <div className="bg-[var(--primary-color)] p-5 rounded-full">
          <img src={menu} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;