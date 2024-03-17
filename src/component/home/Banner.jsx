import bg01 from '../../assets/bg01.jpg'
import AboutSection from './AboutSection';
// import f_shape from '../../assets/f_shape.png'

const Banner = () => {
    return (

        <div className='relative z-10 '>
            <div className='px-10 max-w-[1300px] mx-auto'>
                <div className='border border-y-0 py-16'>
                    <h1 className="text-[96px] font-bold text-white z-20 relative tracking-wide">
                        PASSIONATE WEB <br /><span className="text-[var(--primary-color)]">DESIGN</span> <span className='text-[#9e9d9d]'>AGENCY</span>
                    </h1>
                    <img src={bg01} alt="" className='-mt-20 w-full h-full z-0 object-cover' />
                    
                    {/* about secton */}
                    <AboutSection></AboutSection>

                </div>
            </div>
            {/* <div className='bg-img2 absolute top-0  right-0 bottom-0 flex items-center justify-center -z-10'>
                <img src={f_shape} alt="" className='mx-auto w-1/2 h-auto object-cover' />
            </div> */}
            {/* <img src={f_shape} alt="" className='bg-img2 absolute top-0 text-center left-[50%] right-[50%] mx-auto w-[50%] h-full -z-10 object-cover' /> */}
        </div>


    );
};

export default Banner;