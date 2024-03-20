import aboutIcon from '../../assets/b_logo.png'
import Header from '../ReUseAbleHeader/Header';

const AboutSection = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='-mt-10 md:-mt-[55px] lg:-mt-[180px] md:pl-8 z-30 md:w-[44%] lg:w-[46%]'>
                <img src={aboutIcon} alt="" className='w-[60%] md:w-[100%] ' />
            </div>
            <div className='-mt-16 md:mt-16'>
                <Header title={'About Injaazh'} subtitle_1st={'CRAFTING DIGITAL '} subtitle_2nd={'EXCELLENCE'}></Header>
            </div>
        </div>
    );
};

export default AboutSection;