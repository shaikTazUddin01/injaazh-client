import aboutImg from '../../assets/about_img.jpg'
const Target = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-10 ">
            <div className='grid grid-cols-2 border-x'>
                <div className='text-white'>
                    <div role="tablist" className="tabs tabs-bordered">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-white inline-block" aria-label=" MISSION" />
                        
                        <div role="tabpanel" className="tab-content pt-20 space-y-5">

                            <p> Our mission is to empower businesses and individuals by harnessing the full potential of the digital landscape. We are committed to delivering innovative web solutions that not only meet but exceed our clients' expectations. Through creativity, collaboration.</p>

                            <p> Our vision is to be a trailblazing force in the world of web design and development, recognized for our unwavering commitment to excellence, integrity, and customer satisfaction.</p>

                            <p>connecting businesses with their audiences, and individuals with their dreams. Our path forward is one of continuous growth</p>

                        </div>

                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-white w-full" aria-label=" VISSION" checked />
                        <div role="tabpanel" className="tab-content pt-20 space-y-5">
                            <p> Our mission is to empower businesses and individuals by harnessing the full potential of the digital landscape. We are committed to delivering innovative web solutions that not only meet but exceed our clients' expectations. Through creativity, collaboration.</p>
                            <p>connecting businesses with their audiences, and individuals with their dreams. Our path forward is one of continuous growth</p>
                        </div>

                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-white" aria-label="VALUE" />
                        <div role="tabpanel" className="tab-content pt-20 space-y-5">
                            <p> Our mission is to empower businesses and individuals by harnessing the full potential of the digital landscape. We are committed to delivering innovative web solutions that not only meet but exceed our clients' expectations. Through creativity, collaboration.</p>

                            <p> Our vision is to be a trailblazing force in the world of web design and development, recognized for our unwavering commitment to excellence, integrity, and customer satisfaction.</p>

                          
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={aboutImg} alt="" className='
                 filter grayscale '/>

                </div>
            </div>
        </div>
    );
};

export default Target;