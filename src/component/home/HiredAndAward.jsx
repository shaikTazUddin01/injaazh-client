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
                                <div className='flex justify-center items-center h-[700px]'>
                                    {/* content div */}
                                    <div className='text-center'>
                                        <h1 className='text-[115px] font-bold text-white'>DO YOU HAVE ANY <br />
                                            <span className='text-[var(--primary-color)]'>PROJECT?</span></h1>

                                            <div className='flex justify-center'>
                                            <button className='text-black py-6 px-8 bg-[#cbcbcb] font-medium text-xl rounded flex gap-2'>
                                                GET TO TOUCH
                                                <BsArrowRight className='text-2xl'></BsArrowRight>
                                                </button>
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