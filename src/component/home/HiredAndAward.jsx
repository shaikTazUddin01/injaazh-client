import Header from '../ReUseAbleHeader/Header';
import './HiredAndAward.css'
import { BsArrowRight } from "react-icons/bs";
const HiredAndAward = () => {
    return (
        <div>
            <div className="max-w-[1300px] mx-auto">
                {/* side border */}
                <div className="px-10 ">
                    <div className='border-x h-[80px]'>

                    </div>
                </div>
                {/* set background img */}
                <div className="project-section">
                    {/* set bg gradient color */}
                    <div className='project_section_gradient '>
                        {/* set side border padding */}
                        <div className='px-10 '>
                            <div className='border-x'>
                                <div className='flex justify-center h-full'>
                                    {/* content div */}
                                    <div className='text-center'>
                                        <h1 className='text-[115px] font-bold text-white 
                                        pt-20 pb-16 leading-[110px] tracking-wide'>DO YOU HAVE ANY <br />
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
                <div className="px-10 ">
                    <div className='border-x min-h-screen'>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default HiredAndAward;