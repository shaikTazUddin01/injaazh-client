import aboutIcon from '../../assets/b_logo.png'
import Header from '../ReUseAbleHeader/Header';

const AboutSection = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='-mt-14 md:-mt-[55px] lg:-mt-[190px] md:pl-8 z-30 md:w-[44%] lg:w-[45%]'>
                <img src={aboutIcon} alt="" className='w-[60%] md:w-[100%] ' />
            </div>
            <div className='-mt-5 md:mt-[110px] lg:mt-[82px] leading-[40px]'>
                <Header title={'About Injaazh'} subtitle_1st={'CRAFTING DIGITAL '} subtitle_2nd={'EXCELLENCE'}></Header>
            </div>
        </div>
    );
};

export default AboutSection;