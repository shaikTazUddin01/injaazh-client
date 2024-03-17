import aboutIcon from '../../assets/b_logo.png'
import Header from '../ReUseAbleHeader/Header';

const AboutSection = () => {
    return (
        <div className='flex gap-10'>
            <div className='-mt-36 pl-8'>
                <img src={aboutIcon} alt="" className='w-[100%]' />
            </div>
            <div className='mt-16'>
                <Header title={'About Injaazh'} subtitle_1st={'CRAFTING DIGITAL '} subtitle_2nd={'EXCELLENCE'}></Header>
            </div>
        </div>
    );
};

export default AboutSection;