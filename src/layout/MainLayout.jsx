import { Link, Outlet } from 'react-router-dom';
import Navbar from '../component/shared/Navbar';
import Footer from '../component/shared/Footer';
import GoToTop from '../component/specialComponent/GoToTop';
import { motion } from 'framer-motion';
// react icon
import { MdOutlineClose } from "react-icons/md";


// navicon
import menuIcon from '../assets/menu.svg'
import icon from '../assets/logo.svg'
const MainLayout = () => {
    const closeSidebar = () => {
        const checkbox = document.getElementById('my-drawer-3');
        if (checkbox) {
            checkbox.checked = false; // Uncheck the checkbox to close the sidebar
        }
    };
    const navItem = <>
        <li><Link>Home</Link></li>
        <li><Link>Pages</Link></li>
        <li><Link>Portfolio</Link></li>
        <li><Link>shop</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>contact</Link></li>
    </>
    return (
       
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className=' border-b border-[var(--secondary-color)] '>
                    <div className='max-w-[1440px] mx-auto px-5 lg:px-10'>

                        <div className="w-full navbar bg-black text-white border-x 
                        border-[var(--secondary-color)] py-5 lg:px-0">

                            <div className='flex justify-center items-center w-full'>
                                <div className="flex-1 w-[10%]">
                                    <img src={icon} alt="" className='w-[100px]' />
                                </div>

                                <div className="flex-none hidden lg:block w-[80%]">
                                    <ul className="menu menu-horizontal mx-auto text-white text-[15px] uppercase font-bold tracking-[2px] text-center flex justify-center">
                                        {/* Navbar menu content here */}
                                        {navItem}
                                    </ul>
                                </div>

                                {/* full screen nav icon */}
                                <div className='w-[10%] flex justify-end'>
                                <div className="bg-[var(--primary-color)] p-5 rounded-full lg:flex hidden" >
                                    <img src={menuIcon} alt="" />
                                </div>
                                </div>
                                {/* responsive nav icon */}
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" >
                                        <div className="bg-[var(--primary-color)] p-4 rounded-full" >
                                            <img src={menuIcon} alt="" />
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            {/* responsive sidebar  */}
            <div className="drawer-side min-h-screen z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* close sidebar */}
                <h1 className='text-xl text-white z-50 flex justify-end w-full pt-2 pr-3' onClick={closeSidebar}>
                    <MdOutlineClose/>
                </h1>
                {/* <div> */}
                <ul className="menu p-4 w-full min-h-full bg-black text-white pt-10 
                text-[15px] uppercase font-bold tracking-[2px]
                ">
                    {/* Sidebar content here */}
                    {navItem}
                </ul>
                {/* </div> */}
            </div>
        </div>
    );
};

export default MainLayout;