import'./Award.css'
import { BsArrowUpRight } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import { BiLogoSlack } from "react-icons/bi";

const Award = () => {
    return (
        <div className='grid grid-cols-2 pt-10 p-7 gap-10'>
            <div className="text-white">
                <div className="flex items-center flex-col lg:flex-row justify-between award_section p-10">
                   <BiLogoSlack className='text-6xl award-icon'></BiLogoSlack>
                        <h1 className="text-2xl font-medium">2018 Innovition <br /> Excellent Award</h1>
                        <button className="arrow-btn ">
                            <BsArrowUpRight></BsArrowUpRight>
                        </button>
                    
                </div>
                <div className="custom-divider"></div>
            </div>
            <div className="text-white">
                <div className="flex items-center flex-col lg:flex-row justify-between award_section p-10">
                   <BiLogoSlack className='text-6xl award-icon'></BiLogoSlack>
                        <h1 className="text-2xl font-medium">2018 Innovition <br /> Excellent Award</h1>
                        <button className="arrow-btn ">
                            <BsArrowUpRight></BsArrowUpRight>
                        </button>
                    
                </div>
                <div className="custom-divider"></div>
            </div>
            <div className="text-white">
                <div className="flex items-center flex-col lg:flex-row justify-between award_section p-10">
                   <BiLogoSlack className='text-6xl award-icon'></BiLogoSlack>
                        <h1 className="text-2xl font-medium">2018 Innovition <br /> Excellent Award</h1>
                        <button className="arrow-btn ">
                            <BsArrowUpRight></BsArrowUpRight>
                        </button>
                    
                </div>
                <div className="custom-divider"></div>
            </div>
            <div className="text-white">
                <div className="flex items-center flex-col lg:flex-row justify-between award_section p-10">
                   <BiLogoSlack className='text-6xl award-icon'></BiLogoSlack>
                        <h1 className="text-2xl font-medium">2018 Innovition <br /> Excellent Award</h1>
                        <button className="arrow-btn ">
                            <BsArrowUpRight></BsArrowUpRight>
                        </button>
                    
                </div>
                <div className="custom-divider"></div>
            </div>
            
        </div>
    );
};

export default Award;