import aboutIcon from '../../assets/b_logo.png'

const AboutSection = () => {
    return (
        <div className='flex gap-10'>
            <div className='-mt-36 pl-8'>
                <img src={aboutIcon} alt="" className='w-[100%]' />
            </div>
            <div className='mt-16'>
                <div className='text-white'>
                    <h1>About Injaazh</h1>
                    <h1 className='text-5xl font-semibold'>CRAFTING DIGITAL <br /><span className='text-[#6b6b6b]'>EXCELLENCE</span></h1>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;