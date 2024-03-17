import './marquee.css'

const Marquee = () => {
    return (
        <div className='bg-black  overflow-hidden'>
            <div>
                <marquee behavior="scroll" direction="left" className="bg-[#dce303] h-24 text-center flex items-center text-white marquee01 text-2xl">elcome to Our Website! 1🌟 Stay Updated with the Latest News and Offers. 1📢 Check Back Often for More Updates!elcome to Our Website! 2🌟 Stay Updated with the Latest News and Offers. 2📢 Check Back Often for More Updates!elcome to Our Website! 3🌟 Stay Updated with the Latest News and Offers. 3📢 Check Back Often for More Updates!elcome to Our Website! 4🌟 Stay Updated with the Latest News and Offers. 4📢 Check Back Often for More Updates!</marquee>
            </div>
        </div>
    );
};

export default Marquee;