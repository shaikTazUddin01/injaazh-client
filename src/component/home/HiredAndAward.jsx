import Header from '../ReUseAbleHeader/Header';
import Award from './Award';
import './HiredAndAward.css'
import { BsArrowRight } from "react-icons/bs";
const HiredAndAward = () => {
    return (
        <div className='bg-black'>
            <div className="max-w-[1440px] mx-auto">
                {/* side border */}
                <div className="px-5 lg:px-10 ">
                    <div className='border-x h-[120px] border-[var(--secondary-color)]'>

                    </div>
                </div>
            </div>
            {/* set background img */}
            <div className="project-section bg-black">
                {/* set bg gradient color */}
                <div className='project_section_gradient'>
                    {/* set side border padding */}
                    <div className="max-w-[1440px] mx-auto">
                        <div className='px-5 lg:px-10'>
                            <div className='border-x border-[var(--secondary-color)]'>
                                <div className='flex justify-center h-full'>
                                    {/* content div */}
                                    <div className='text-center'>
                                        <h1 className='text-3xl md:text-6xl lg:text-[115px] font-bold text-white 
                                        pt-20 pb-16 md:leading-[80px] lg:leading-[110px] tracking-wide'>DO YOU HAVE ANY <br />
                                            <span className='text-[var(--primary-color)]'>PROJECT?</span></h1>
                                        {/* button */}
                                        <div className='flex justify-center h-[100px] '>
                                            <button className='text-black  px-8 bg-[#cbcbcb] font-medium text-xl rounded flex gap-4 items-center getToTouch'>
                                                GET TO TOUCH
                                                <BsArrowRight className='BsArrowRight text-2xl'></BsArrowRight>
                                            </button>
                                        </div>
                                        {/* title text */}
                                        <div className='pt-20 mx-auto'>
                                            <Header title={'our awarn'} subtitle_1st={'award we get over'} subtitle_2nd={'the decade'} position={"center"} ></Header>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="max-w-[1440px] mx-auto">
                    <div className="px-5 lg:px-10 bg-black">
                        <div className='border-x border-[var(--secondary-color)]'>
                            <Award></Award>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default HiredAndAward;