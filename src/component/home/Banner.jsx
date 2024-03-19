import bg01 from '../../assets/bg01.jpg'
import AboutSection from './AboutSection';
import f_shape from '../../assets/f_shape.png'
import shape from '../../assets/shep-1.png'
// css
import './Banner.css'

const Banner = () => {
    return (

        <div className='relative z-10 '>
            <div className='px-10 max-w-[1440px] mx-auto'>
                <div className='border border-[var(--secondary-color)] border-y-0 py-16 leading-[110px]'>
                    <h1 className="text-[96px] font-semibold text-white z-20 relative tracking-wide">
                        PASSIONATE WEB <br /><span className="text-[var(--primary-color)]">DESIGN</span> <span className='text-[#9e9d9d]'>AGENCY</span>
                    </h1>
                    <div className='absolute z-30 right-6 top-[150px]'>
                        <img src={shape} alt="" className=''/>
                    </div>
                    <div className='relative -mt-[91px] z-10'>
                        <img src={bg01} alt="" className='w-full h-full -z-0 object-cover ' />
                        <div className='absolute h-full w-full z-20 top-0 banner-overlay'>
                        </div>
                    </div>


                    {/* about secton */}
                    <AboutSection></AboutSection>

                </div>
            </div>
            <div className='-top-20 max-w-screen-2xl overflow-hidden absolute -z-10'>
                <img src={f_shape} alt="" className='bg-img2 h-full object-cover' />
            </div>
        </div>


    );
};

export default Banner;