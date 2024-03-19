import './GoToTop.css'
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";


const GoToTop = () => {

    const [showScroll,setShowScroll]=useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // console.log(showScroll)
    const scrollToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional smooth scrolling animation
        });
    }
    return (
        <div className={showScroll >=420?"z-30 showbtn":"hide"}>
            <button className="p-4 bg-[var(--primary-color)] rounded-2xl text-black shadow-md shadow-black" onClick={scrollToTop }>
              <FaArrowUpLong></FaArrowUpLong>
            </button>
        </div>
    );
};

export default GoToTop;