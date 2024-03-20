import bg01 from '../../assets/bg01.jpg'
import AboutSection from './AboutSection';
import f_shape from '../../assets/f_shape.png'
import shape from '../../assets/shep-1.png'
// css
import './Banner.css'
// framer motion
import { motion } from 'framer-motion';

const Banner = () => {
    return (

        <div className='relative z-10 '>
            <div className='px-5 lg:px-10 max-w-[1440px] mx-auto'>
                <div className='border border-[var(--secondary-color)] border-y-0 py-10 lg:py-16 leading-[110px]'>
                    <div className='flex justify-between relative'>
                        {/* motion animation */}
                        <div className='leading-[30px] md:leading-none flex-1'>
                            {/* title */}
                            <motion.h1
                                initial={{ x: -900 }}
                                animate={{ x: 0 }}
                                transition={{
                                    duration: ".8"

                                }}
                                className="text-[30px] md:text-[60px] lg:text-[96px] font-semibold text-white z-20 relative tracking-wide ">
                                PASSIONATE WEB <br />
                            </motion.h1>
                            <motion.h1
                                initial={{ x: -900 }}
                                animate={{ x: 0 }}
                                transition={{
                                    duration: ".8",
                                    delay: ".2"

                                }}
                                className="text-[30px] md:text-[60px] lg:text-[96px] font-semibold text-white z-20 relative tracking-wide "
                            > <span className="text-[var(--primary-color)]
                        
                       ">DESIGN</span>  <span className='text-[#9e9d9d]'>AGENCY</span></motion.h1>

                        </div>
                        {/* shape img */}
                        <div className='z-30 absolute pt-3 lg:pt-[50px] top-0 end-0 '>
                            <img src={shape} alt="" className='h-[30px] md:h-full' />
                        </div>
                    </div>
{/* banner img */}
                    <div className='relative -mt-[26px] md:-mt-[53px] lg:-mt-[85px] z-10'>
                        <img src={bg01} alt="" className='w-full h-full -z-0 object-cover ' />
                        <div className='absolute h-full w-full z-20 top-0 banner-overlay'>
                        </div>
                    </div>


                    {/* about secton */}
                    <AboutSection></AboutSection>

                </div>
            </div>
            <div className='top-0 md:-top-20 lg:-top-40 overflow-hidden absolute -z-10'>
                <img src={f_shape} alt="" className='bg-img2 h-full object-cover' />
            </div>
        </div>


    );
};

export default Banner;